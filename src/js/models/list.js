module.exports = {
  get({ pageSize = 20, pageNo = 2 }) {
    let now = Date.now();
    now = (now + '').slice(0, 10);
    return $.ajax({
      url: `/api/homefis/getNews?pageSize=${pageSize}&param_str=${now}%3A${pageNo}%3A&type=&channel_type=`,
      dataType: 'json',
    });
  },
  getAnother({type='basketball'}){
    return $.ajax({
      url: `/api/homefis/getNews?pageSize=20&param_str=&type=${type}&channel_type=11`,
      dataType: 'json',
    });
  },
  getSearch({keyword}) {
    return $.ajax({
      url: `/api/search?page=1&page_size=30&type=news&keywords=${keyword}`,
      dataType: 'json',
    });
  }
};
