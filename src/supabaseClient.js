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
    .select("distance, profile(username, avatar_url) , created_at ,rid, title")
    .eq("uid", userid)
    .order("created_at", { ascending: false });

  if (error) throw error;
  console.log("ye vala", data);
  const returnData = data.map((item) => {
    return {
      rid: item.rid,
      distance: item.distance,
      date: new Date(item.created_at),
      avatar: item.profile.avatar_url,
      username: item.profile.username,
      title: item.title,
    };
  });
  return returnData;
}

export async function deleteContribution(rid) {
  console.log("bro called", rid);
  let { data, error } = await supabase
    .from("records")
    .select("distance")
    .eq("rid", rid)
    .single();
  let covered = await getGoal();
  console.log(covered, data.distance);
  let newCovered = parseFloat(covered) - parseFloat(data.distance);
  console.log(newCovered);
  await supabase
    .from("goals")
    .update({ covered: newCovered })
    .match({ gid: 1 });

  await supabase.from("records").delete().match({ rid: rid });
  await removeContributor();
}
export async function removeContributor() {
  console.log("removedddd");
  let userid = supabase.auth.user().id;
  let { data, error } = await supabase
    .from("records")
    .select("distance")
    .eq("uid", userid);
  console.log(data);

  if (data.length === 0 || data === null) {
    ridContributor(userid);
  }
}
export async function ridContributor(user) {
  console.log("removedddd3");
  let { data, error } = await supabase
    .from("goals")
    .select(`contributors`)
    .eq("gid", 1)
    .single();
  if (error) throw error;

  let newContri = data.contributors.filter((item) => {
    if (item !== user) {
      return item;
    }
  });
  console.log(newContri);

  await supabase
    .from("goals")
    .update({ contributors: newContri })
    .match({ gid: 1 });
}

async function getGoal() {
  let { data, error } = await supabase.from("goals").select("covered").single();
  if (error) throw error;
  console.log(data);
  return data.covered;
}

export async function getContributorsList() {
  let { data, error } = await supabase
    .from("records")
    .select("profile(avatar_url, username) , distance");
  console.log(data);
  let allUsers = [];
  allUsers = data.map((item) => {
    return item.profile.username;
  });
  allUsers = [...new Set(allUsers)];
  //console.log(allUsers);
  let returnArr = [];
  allUsers.forEach((element) => {
    let total = 0;
    let avatar = "";
    data.forEach((element2) => {
      if (element2.profile.username === element) {
        total += parseFloat(element2.distance);
        avatar = element2.profile.avatar_url;
      }
    });
    console.log(total);
    returnArr.push({
      username: element,
      totalDistance: total.toFixed(2),
      avatar: avatar,
    });
  });
  console.log(returnArr);
  returnArr.sort((a, b) =>
    a.totalDistance < b.totalDistance
      ? 1
      : b.totalDistance < a.totalDistance
      ? -1
      : 0
  );
  return returnArr;

  //   let covered = await getGoal();
  //   console.log(covered, data.distance);
  //   let newCovered = parseFloat(covered) - parseFloat(data.distance);
  //   console.log(newCovered);
  //   await supabase
  //     .from("goals")
  //     .update({ covered: newCovered })
  //     .match({ gid: 1 });

  //   await supabase.from("records").delete().match({ rid: rid });
}
