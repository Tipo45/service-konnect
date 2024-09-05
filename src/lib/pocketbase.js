import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function create_user(
  username,
  password,
  confirmpassword,
  firstname,
  lastname
) {
  const data = {
    username: username,
    password: password,
    passwordConfirm: confirmpassword,
    first_name: firstname,
    last_name: lastname,
  };
  await pb.collection("users").create(data);
  const record = await pb
    .collection("users")
    .authWithPassword(username, password);
  return record;
}

export function logout() {
  // "logout" the last authenticated account
  pb.authStore.clear();
}
