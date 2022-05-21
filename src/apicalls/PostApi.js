import axios from "axios";

const PostApi = async (url, body, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("authToken") : "";
  try {
    const response = await axios.post(url, body, {
      headers: {
        authorization: auth,
      },
    });
    return {
      data: response.data.data,
      success: true,
    };
  } catch (err) {
    console.log(err);
    console.log(err.message);
    return {
      data: "",
      success: false,
      status: err.response.status,
    };
  }
};

const PostApi2 = async (url, body, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("authToken") : "";
  return await axios.post(url, body, {
    headers: {
      authorization: auth,
    },
  });
};
export { PostApi, PostApi2 };
