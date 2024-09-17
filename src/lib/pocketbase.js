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



// export async function checkAuth() {
//   const isAuthenticated = pb.authStore.isValid;

//   if (isAuthenticated) {
//     const user = await getCurrentUser();

//     if (user && user.artisan === true) {
//       // The user is an artisan
//       return { isAuthenticated: true, role: "artisan" };
//     } else if (user) {
//       // The user is a client
//       return { isAuthenticated: true, role: "client" };
//     }
//   }

//   return { isAuthenticated: false };
// }



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
  instahandle
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

// export async function getCurrentUser() {
//   if (!pb.authStore.isValid) {
//     return null;
//   } else {
//     try {
//       const user = pb.authStore.model;

//       const userRole = user.artisan;

//       return {
//         user,
//         role: userRole,
//       };
//     } catch (error) {
//       console.error("Error fetching current user", error);
//       return null;
//     }
//   }
// }

// export async function checkAuth() {
//   const isAuthenticated = pb.authStore.isValid;

//   if (isAuthenticated) {
//     const user = await getCurrentUser();
//     return {
//       isAuthenticated: true,
//       role: user.artisan ? 'artisan' : 'client', // Ensure this line properly sets the role
//     };
//   }

//   return { isAuthenticated: false, role: null };
// }

export async function checkAuth() {
  if (pb.authStore.isValid) {
    const user = pb.authStore.model; // Retrieve the logged-in user model

    // Check if the user is either artisan or client
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
