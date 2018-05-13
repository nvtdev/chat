export const startSocket = (socket) => {
  return (dispatch) => {
    socket.on('message', (res) => {
      console.dir(res);
      dispatch(loadMessages(res));
    });
  }
}

export const loadMessages = (res) => ({
  type: "LOAD_MESSAGES",
  messages: res
});

export const sendMessage = (data) => ({
  type: 'SEND_MESSAGE',
  message: data
});
