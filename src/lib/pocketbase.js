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
    "first_name": firstname,
    "last_name": lastname,
    "username": username,
    "password": password,
    "passwordConfirm": confirmpassword,
    "client": true
  };
  await pb.collection("users").create(data);
  const record = await pb
    .collection("users")
    .authWithPassword(username, password);
  return record;
}

export async function user_info() {
  const id = pb.authStore.model.id;
  const record = await pb.collection("users").getOne(id, {
    expand: "relField1,relField2.subRelField",
  });
  return record;
}

export async function login(username, password) {
  const record = await pb
    .collection("users")
    .authWithPassword(username, password);
  return record;
}

export function logout() {
  // "logout" the last authenticated account
  pb.authStore.clear();
}



export async function create_artisan(
  username,
  password,
  confirmpassword,
  firstname,
  lastname,
  description,
  address,
  nameofartisan,
  phonenumber,
  additionalphonenumber,
  whatsappnumber,
  instahandle,
  category
) {
  const data = {
    "username": username,
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
    "insta_handle": instahandle,
    "artisan": true,
    "category": category
  };

  await pb.collection("artisan").create(data);
  const record = await pb
    .collection("artisan")
    .authWithPassword(username, password);
  return record;
}

export async function artisan_info() {
  const id = pb.authStore.model.id;
  const record = await pb.collection("artisan").getOne(id);
  return record;
}

export async function login_artisan(username, password) {
  const record = await pb
    .collection("artisan")
    .authWithPassword(username, password);
  return record;
}

export async function checkAuth() {
  if (pb.authStore.isValid) {
    const user = pb.authStore.model; 

    if (user.artisan) {
      return { isAuthenticated: true, role: "artisan" };
    } else if (user.client) {
      return { isAuthenticated: true, role: "client" };
    }
  }

  return { isAuthenticated: false, role: null };
}


export async function reviews(review, rate) {
  const userid = pb.authStore.model.id;
  const data = {
    review: review,
    rate: rate,
    user: userid,
  };

  const record = await pb.collection("review").create(data);
  return record;
}

export async function update_artisan(
  
  description,
  address,
  nameofartisan,
  phonenumber,
  additionalphonenumber,
  whatsappnumber,
  instahandle,
  category,
  sellersimage
) {
  const data = {
    
    "description": description,
    "address": address,
    "name_of_business": nameofartisan,
    "phone_number": phonenumber,
    "additional_phone_number": additionalphonenumber,
    "whatsapp_number": whatsappnumber,
    "insta_handle": instahandle,
    "artisan": true,
    "category": category,
  };
  const id = pb.authStore.model.id;
  const formData = new FormData();

  
  formData.append("description", description);
  formData.append("address", address);
  formData.append("name_of_business", nameofartisan);
  formData.append("phone_number", phonenumber);
  formData.append("additional_phone_number", additionalphonenumber);
  formData.append("whatsapp_number", whatsappnumber);
  formData.append("insta_handle", instahandle);
  formData.append("artisan", true);
  formData.append("category", category);

  if (sellersimage && sellersimage.length > 0) {
    for (let i = 0; i < sellersimage.length; i++) {
      formData.append("images", sellersimage[i]); // 'images' is the field name in the Pocketbase collection
    }
  }

  const record = await pb.collection('artisan').update(id, data);
  return record;
}