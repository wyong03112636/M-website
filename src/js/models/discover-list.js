module.exports = {
    getDiscover({page = 1, page_size = 30}){
        return $.ajax({
          url: `/api/find/mobileList?tag_id=283&param_str=`,
          dataType: 'json',
        });
      }
}