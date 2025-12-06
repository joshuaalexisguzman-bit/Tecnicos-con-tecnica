(function(){
    const btn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const storageKey = 'site-theme';

    function applyTheme(theme){
        if(theme === 'dark'){
            root.classList.add('dark');
            if(btn) btn.textContent = '🌙';
        } else {
            root.classList.remove('dark');
            if(btn) btn.textContent = '☀️';
        }
    }

    function getPreferredTheme(){
        const saved = localStorage.getItem(storageKey);
        if(saved) return saved;
        // fallback to OS preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // initialize
    applyTheme(getPreferredTheme());

    if(btn){
        btn.addEventListener('click', function(){
            const isDark = root.classList.contains('dark');
            const next = isDark ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem(storageKey, next);
        });
    }

    // Listen for theme changes in other tabs/windows and apply immediately
    window.addEventListener('storage', function(e){
        if(e.key === storageKey){
            applyTheme(e.newValue || 'light');
        }
    });
})();
