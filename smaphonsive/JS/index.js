document.addEventListener("DOMContentLoaded", function() {
	const myTarget = document.querySelectorAll('[data-nav-number]');
	const myNavTarget = document.querySelectorAll('[data-heading-number]');
  
	// IntersectionObserverのオプション設定
	let myOptions = {
	  root: null,
	  rootMargin: '0px 0px -30% 0px', // 下から30%分上に余裕を持たせる
	  threshold: 0 // 交差し始めたらトリガー
	};
  
	// IntersectionObserverのインスタンスを作成
	const myObserver = new IntersectionObserver(myIntersect, myOptions);
  
	// 各ヘッダーにオブザーバーを登録
	myNavTarget.forEach((target) => myObserver.observe(target));
  
	// Intersection Observerのコールバック関数
	function myIntersect(entries) {
	  entries.forEach((entry) => {
		const headingNumber = parseInt(entry.target.getAttribute('data-heading-number'), 10);
		const navItem = document.querySelector(`[data-nav-number="${headingNumber}"]`);
  
		if (entry.isIntersecting && navItem) {
		  // すべての.nav-itemから.is-currentを一旦削除
		  myTarget.forEach((item) => item.classList.remove('is-current'));
  
		  // 現在のビューポートに入っている要素にのみ.is-currentを追加
		  navItem.classList.add('is-current');
		}
	  });
	}
  });
  