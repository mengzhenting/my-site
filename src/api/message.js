import request from "./request";
//分页消息
export async function getMessages(page = 1, limit = 10) {
  return await request.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}
//提交消息
export async function postMessage(msgInfo) {
  return await request.post("/api/message", msgInfo);
}