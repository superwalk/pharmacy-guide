// ═══ 导航 ═══
const SCREENS = ['home','knowledge','guidelines','favorites','detail','compare','search','profile','label','mynotes','calc'];
const NAV_SCREENS = ['home','knowledge','guidelines','profile','compare'];
let screenStack = ['home'];

function showScreen(name) {
  SCREENS.forEach(s => document.getElementById('screen-' + s).classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');

  // 更新底部导航
  const navScreens = ['home','knowledge','guidelines','profile'];
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.screen === name && navScreens.includes(name));
  });

  // 隐藏/显示导航栏
  const showNav = NAV_SCREENS.includes(name);
  document.getElementById('nav-bar').style.display = showNav ? 'flex' : 'none';
  document.querySelectorAll('.screen').forEach(s => {
    s.style.height = showNav ? 'calc(100% - var(--nav-height))' : '100%';
  });

  // 渲染页面
  if (name === 'home') renderHome();
  if (name === 'knowledge') renderKnowledge();
  if (name === 'guidelines') renderGuidelines();
  if (name === 'profile') renderProfile();
  if (name === 'favorites') renderFavorites();
  if (name === 'compare') renderCompare();
}

function pushScreen(name) {
  screenStack.push(name);
  showScreen(name);
}

function goBack() {
  if (screenStack.length > 1) { screenStack.pop(); showScreen(screenStack[screenStack.length-1]); }
  else { showScreen('home'); screenStack = ['home']; }
}

// 初始化导航
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    screenStack = [item.dataset.screen];
    showScreen(item.dataset.screen);
  });
});
