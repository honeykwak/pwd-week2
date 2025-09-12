<!-- src/routes/+page.svelte -->
<script>
  let name = $state('');
  let welcome = $derived(name ? `Hello, ${name}!` : 'Welcome!');

  const profilePics = [
    'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/test1.jpeg',
    'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/test2.jpeg'
  ];
  let currentPicIndex = $state(0);

  function toggleProfilePic() {
    currentPicIndex = (currentPicIndex + 1) % profilePics.length;
  }

  function randomize() {
    const msgs = ['웹 개발 재밌다!', 'SvelteKit 금방 익힘', 'Vercel로 바로 배포!'];
    alert(msgs[Math.floor(Math.random() * msgs.length)]);
  }
</script>

<section class="profile-section">
  <img 
    src={profilePics[currentPicIndex]} 
    alt="프로필 사진" 
    class="profile-pic"
    onclick={toggleProfilePic}
  />
  <h1>곽재헌</h1>
  <p>디지털미디어학과(주전공), 소프트웨어학과(복수전공)</p>
  <p>아주대학교 인문과학연구소 학부연구생</p>
</section>

<hr/>

<h1>{welcome}</h1>

<label>
  Your name: <input placeholder="type your name" bind:value={name} />
</label>
<p>미리보기: <strong>{name || '(입력 대기)'}</strong></p>

<button onclick={randomize}>랜덤 메시지</button>