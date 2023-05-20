function tabs() {
    const tabs = document.querySelectorAll('.authorization__tab')
    const tabsContent = document.querySelectorAll('.tabContent')
    const tabsParent = document.querySelector('.authorization__tabs')

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
    }

    function showTabContent(i) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('active')
        
    }

    hideTabContent()
    showTabContent(0)

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('authorization__tab')){
            tabs.forEach((item, i) =>{
                if (target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    });
}

tabs()