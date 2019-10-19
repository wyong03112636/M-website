module.exports = {
    getDetails({page = 1, page_size = 5}){
        return $.ajax({
          url: `/api/sports/getComment?id=56965&tag_id=0&page=${page}&page_size=${page_size}&sort=hot`,
          dataType: 'json',
        });
      }
}