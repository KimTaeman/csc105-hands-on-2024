import { Axios } from "../../axiosInstance";

export const getTodo = async () => {
  try {
    const response = await Axios.get("/todo"); // Your todo api path of getting todo
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
    };
  }
};

export const createTodo = async (newTodoName: string) => {
  try {
    const response = await Axios.post("/todo", {
      name: newTodoName,
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
    };
  }
};

export const updateTodoName = async (id: number, newTodoName: string) => {
  try {
    const response = await Axios.patch(`/todo`, {
      id,
      name: newTodoName,
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
    };
  }
};

export const updateTodoStatus = async (id: number) => {
  try {
    const response = await Axios.patch(`/todo/success/${id}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
    };
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await Axios.delete(`/todo/${id}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
    };
  }
};
