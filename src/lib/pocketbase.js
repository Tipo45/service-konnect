import PocketBase from "pocketbase";

// export const pb = new PocketBase("http://127.0.0.1:8090");
export const pb = new PocketBase("https://service-konnect.pockethost.io/");

export async function create_user(
  firstname,
  lastname,
  username,
  password,
  confirmpassword
) {
  const data = {
    first_name: firstname,
    last_name: lastname,
    username: username,
    password: password,
    passwordConfirm: confirmpassword
  };
  await pb.collection("users").create(data);
  const record = await pb
    .collection("users")
    .authWithPassword(username, password);
  return record;
}

export async function user_info() {
  const id = pb.authStore.model.id
  const record = await pb.collection('users').getOne(id, {
    expand: 'relField1,relField2.subRelField',
});
return record
}

export async function login(username, password) {
  const record = await pb.collection('users').authWithPassword(
    username,
    password,
);
return record
}

export function logout() {
  // "logout" the last authenticated account
  pb.authStore.clear();
}

export async function create_artisan( password, confirmpassword, firstname, lastname, description, address, nameofartisan, phonenumber, additionalphonenumber, whatsappnumber, instahandle) {
  const data = {
    "password": password,
    "passwordConfirm": confirmpassword,
    "first_name": firstname,
    "last_name": lastname,
    "description": description,
    "address": address,
    "name_of_business": nameofartisan,
    "phone_number": phonenumber,
    "additional_phone_number": additionalphonenumber,
    "whatsapp_number": whatsappnumber,
    "insta_handle": instahandle
};

await pb.collection('artisan').create(data);
const record = await pb
    .collection("artisan")
    .authWithPassword(nameofartisan, password);
  return record;
}

export async function artisan_info() {
  const id = pb.authStore.model.id
  const record = await pb.collection('artisan').getOne(id, {
    expand: 'relField1,relField2.subRelField',
});
return record
}

export async function login_artisan(
  nameofartisan, password
) {
  const record = await pb.collection('artisan').authWithPassword(
    nameofartisan,
    password,
);
return record
}