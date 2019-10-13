module.exports = {
  get({ pageSize = 20, pageNo = 2 }) {
    let now = Date.now();
    now = (now + '').slice(0, 10);
    return $.ajax({
      url: `/api/homefis/getNews?pageSize=${pageSize}&param_str=${now}%3A${pageNo}%3A&type=&channel_type=`,
      dataType: 'json',
    });
  },
  getDiscount({page = 1, page_size = 30}){
    return $.ajax({
      url: `/api/youhui/list?r=999&page=${page}&page_size=${page_size}&publish_date=`,
      dataType: 'json',
    });
  }
};
