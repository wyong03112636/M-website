module.exports = {
    getDiscount({page = 1, page_size = 30}){
        return $.ajax({
          url: `/api/youhui/list?r=999&page=${page}&page_size=${page_size}&publish_date=`,
          dataType: 'json',
        });
      }
}