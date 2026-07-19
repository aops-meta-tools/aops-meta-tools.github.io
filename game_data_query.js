fetch('https://artofproblemsolving.com/m/community/ajax.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: "topic_id="+prompt("Enter topic ID")+"&direction=forwards&start_post_id=-1&start_post_num=1&show_from_time=-1&num_to_fetch=1000000000&a=fetch_posts_for_topic&aops_logged_in=true&aops_user_id=369171&aops_session_id=407bfd4c25aa9e55f19c701b5f9ae955",
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
