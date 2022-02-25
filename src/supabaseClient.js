import { createClient } from "@supabase/supabase-js";
import { username, avatarURL } from "./session";

const supabaseUrl = __api.env.SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = __api.env.SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  persistSession: true,
  autoRefreshToken: true,
});

export async function initProj() {
  let user1 = supabase.auth.user();
  let { data, error, status } = await supabase
    .from("profile")
    .select(`username, avatar_url`)
    .eq("uid", user1.id)
    .single();
  username.set(data.username);
  avatarURL.set(data.avatar_url);
}

export async function modifyProfile(updates) {
  let user = supabase.auth.user();
  let { error } = await supabase
    .from("profile")
    .upsert({ ...updates, uid: user.id });
  if (error) throw error;
  let { data, error1, status } = await supabase
    .from("profile")
    .select(`username, avatar_url`)
    .eq("uid", user.id)
    .single();
  username.set(data.username);
  avatarURL.set(data.avatar_url);
}

export async function getHomePage() {
  let { data, error } = await supabase
    .from("goals")
    .select(`covered, total, contributors`)
    .eq("gid", 1)
    .single();

  let recentContribution = await getRecentContribution();
  console.log(recentContribution);
  if (error) throw error;
  let returnData = {};

  returnData["goalDetails"] = {
    total: data.total,
    covered: data.covered,
    contributors: data.contributors.length,
    percentageLeft: 100 - (data.covered / data.total) * 100,
  };
  returnData["recent"] = [];
  returnData["recent"] = recentContribution.map((item) => {
    return {
      distance: item.distance,
      username: item.profile.username,
      date: new Date(item.created_at),
      title: item.title,
      avatar: item.profile.avatar_url,
    };
  });
  return returnData;
}

export async function getRecentContribution() {
  let { data, error } = await supabase
    .from("records")
    .select("distance, profile(username, avatar_url) , created_at , title")
    .order("created_at", { ascending: false })
    .limit(5);
  // .order('created_at', { ascending: false })
  // .limit(5)
  if (error) throw error;
  return data;
}
export async function addContribution(uid, dist, title) {
  const { data, error } = await supabase
    .from("records")
    .insert([{ uid: uid, distance: dist, title: title }]);
  console.log("bro");
  await updateGoal(uid, dist);
  if (error) throw error;
  return true;
}
export async function updateGoal(uid, dist) {
  let { data, error } = await supabase
    .from("goals")
    .select(`covered, total, contributors`)
    .eq("gid", 1)
    .single();
  if (error) throw error;
  let newCovered = parseFloat(data.covered) + parseFloat(dist);
  data.contributors.push(uid);
  let newContributors = [...new Set(data.contributors)];
  console.log("brooooooooooooooooooooo");
  console.log(newContributors, newCovered);
  //   upadateda(newCovered, newContributors);
  await supabase
    .from("goals")
    .update({ covered: newCovered, contributors: newContributors })
    .match({ gid: 1 });
}

export async function getYourContribution() {
  let userid = supabase.auth.user().id;

  let { data, error } = await supabase
    .from("records")
    .select("distance, profile(username, avatar_url) , created_at , title")
    .eq("uid", userid)
    .order("created_at", { ascending: false });

  if (error) throw error;
  console.log("ye vala", data);
  const returnData = data.map((item) => {
    return {
      distance: item.distance,
      date: new Date(item.created_at),
      avatar: item.profile.avatar_url,
      username: item.profile.username,
      title: item.title,
    };
  });
  return returnData;
}
