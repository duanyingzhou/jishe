// 首先实现播放暂停功能
const player = document.querySelector('.live .container .common_container .left .player')
const video = document.querySelector('.viewer')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const volumeInput = document.querySelector('input[name="volume"]')
const ranges = document.querySelectorAll('.player__slider')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const barrageList = document.getElementById('barrageList')


video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
video.addEventListener('play', updatedToggle)
video.addEventListener('pause', updatedToggle)
video.addEventListener('timeupdate', handleProgress)
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

// 切换播放状态
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

// 切换播放状态图标
function updatedToggle() {
  const icon = video.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

// 前进后退功能
function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

// 改变播放速度和音量
function handleRangeUpdate() {
  video[this.name] = this.value
}

// 改变进度条
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  console.log(`percent:${percent}`);
}

// 点击切换播放进度
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  // console.log(e.offsetX);
  // console.log(progress.offsetWidth);
  // console.log(video.duration);
  console.log(scrubTime);
  video.currentTime = scrubTime
}

// 进度表图标
const box = document.querySelector('.player')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const img5 = document.querySelector('.img5')
const img6 = document.querySelector('.img6')

player.addEventListener('mouseenter',function (){
  document.querySelector('.box .item').classList.add('active2')
})

player.addEventListener('mouseleave',function (){
  document.querySelector('.box .item.active2').classList.remove('active2')
})

// 图标1
box.addEventListener('mouseenter',function(){
    document.querySelector('.box .img1').classList.add('active')
})

box.addEventListener('mouseleave',function(){
    document.querySelector('.box .img1').classList.remove('active')
})

img1.addEventListener('click',function(e){
  progressBar.style.flexBasis = `12.67%`;
  video.currentTime = 13.757
   
})

img1.addEventListener('mouseenter',function(){
    document.querySelector('.title1').classList.add('active1')
})

img1.addEventListener('mouseleave',function(){
    document.querySelector('.title1').classList.remove('active1')
})

// 图标2
box.addEventListener('mouseenter',function(){
  document.querySelector('.box .img2').classList.add('active')
})

box.addEventListener('mouseleave',function(){
  document.querySelector('.box .img2').classList.remove('active')
})

img2.addEventListener('mouseenter',function(){
  document.querySelector('.box .logo .title2').classList.add('active1')
})

img2.addEventListener('mouseleave',function(){
  document.querySelector('.box .logo .title2').classList.remove('active1')
})

img2.addEventListener('click',function(e){
  progressBar.style.flexBasis = `21.127%`;
  video.currentTime = 22.93
   
})

// 图标3
box.addEventListener('mouseenter',function(){
  document.querySelector('.box .img3').classList.add('active')
})

box.addEventListener('mouseleave',function(){
  document.querySelector('.box .img3').classList.remove('active')
})

img3.addEventListener('mouseenter',function(){
  document.querySelector('.box .logo .title3').classList.add('active1')
})

img3.addEventListener('mouseleave',function(){
  document.querySelector('.box .logo .title3').classList.remove('active1')
})

img3.addEventListener('click',function(e){
  progressBar.style.flexBasis = `31.69%`;
  video.currentTime = 34.4
})

// 图标4
box.addEventListener('mouseenter',function(){
  document.querySelector('.box .img4').classList.add('active')
})

box.addEventListener('mouseleave',function(){
  document.querySelector('.box .img4').classList.remove('active')
})

img4.addEventListener('mouseenter',function(){
  document.querySelector('.box .logo .title4').classList.add('active1')
})

img4.addEventListener('mouseleave',function(){
  document.querySelector('.box .logo .title4').classList.remove('active1')
})

img4.addEventListener('click',function(e){
  progressBar.style.flexBasis = `39.436%`;
  video.currentTime = 42.80
})


// 图标5
box.addEventListener('mouseenter',function(){
  document.querySelector('.box .img5').classList.add('active')
})

box.addEventListener('mouseleave',function(){
  document.querySelector('.box .img5').classList.remove('active')
})

img5.addEventListener('mouseenter',function(){
  document.querySelector('.box .logo .title5').classList.add('active1')
})

img5.addEventListener('mouseleave',function(){
  document.querySelector('.box .logo .title5').classList.remove('active1')
})

img5.addEventListener('click',function(e){
  progressBar.style.flexBasis = `49.77%`;
  video.currentTime = 54.01
})


// 图标6
box.addEventListener('mouseenter',function(){
  document.querySelector('.box .img6').classList.add('active')
})

box.addEventListener('mouseleave',function(){
  document.querySelector('.box .img6').classList.remove('active')
})

img6.addEventListener('mouseenter',function(){
  document.querySelector('.box .logo .title6').classList.add('active1')
})

img6.addEventListener('mouseleave',function(){
  document.querySelector('.box .logo .title6').classList.remove('active1')
})

img6.addEventListener('click',function(e){
  progressBar.style.flexBasis = `64.08%`;
  video.currentTime = 69.48
})


