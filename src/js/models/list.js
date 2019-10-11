module.exports = {
  get({ pageSize = 20, pageNo = 2 }) {
    let now = Date.now();
    now = (now + '').slice(0, 10);
    return $.ajax({
      url: `/api/homefis/getNews?pageSize=${pageSize}&param_str=${now}%3A${pageNo}%3A&type=&channel_type=`,
      dataType: 'json',
    });
  },
};
