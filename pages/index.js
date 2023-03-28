export default function Home() {
  return (
      <div className="main-page relative overflow-hidden">
          <header className="mx-auto relative">
              <div className="relative px-8 max-w-main flex pt-5 items-center mx-auto">
                  <a href="https://" className="logo">
                      <svg width="132" height="16" viewBox="0 0 132 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.6251 12.4791C20.6251 13.029 20.5032 13.4973 20.259 13.8842C20.015 14.2712 19.6842 14.5971 19.2671 14.8619C18.8501 15.1268 18.3566 15.3253 17.7872 15.4576C17.2174 15.5898 16.6172 15.6561 15.9867 15.6561H4.66451C4.05411 15.6561 3.47434 15.5796 2.9249 15.4271C2.37575 15.2741 1.89251 15.0604 1.47547 14.7854C1.05843 14.5104 0.727579 14.1797 0.483337 13.7927C0.239521 13.4058 0.117188 12.968 0.117188 12.4791V3.46755C0.117188 3.01959 0.239521 2.6071 0.483337 2.23038C0.727579 1.85365 1.05843 1.52772 1.47547 1.25273C1.89251 0.978023 2.37575 0.759081 2.9249 0.596045C3.47434 0.433293 4.06418 0.351562 4.69498 0.351562H15.9867C17.4109 0.351562 18.5399 0.61137 19.374 1.13056C20.1671 1.62421 20.5833 2.38078 20.622 3.39915C20.6236 3.44257 20.6094 3.48046 20.5792 3.51196C20.549 3.54318 20.5119 3.55921 20.4683 3.55921H5.52169C5.35201 3.55921 5.21366 3.69756 5.21366 3.8674V12.2012C5.21366 12.3711 5.35201 12.5096 5.52169 12.5096H15.2511C15.4208 12.5096 15.5591 12.3711 15.5591 12.2012C15.5591 10.9547 15.5591 9.70888 15.5591 8.46277C15.5591 8.3958 15.5184 8.33875 15.4554 8.3169C15.3919 8.29505 15.3251 8.31506 15.2838 8.36784L14.4753 9.40182C14.3545 9.55634 14.1861 9.63836 13.9902 9.63836H11.8973C10.6764 9.63836 9.62362 9.38366 8.73851 8.87469C7.74822 8.30456 7.25846 7.69044 7.25846 6.5543C7.25846 6.46959 7.32777 6.4002 7.41254 6.4002H20.3171C20.4869 6.4002 20.6251 6.53855 20.6251 6.70854V12.4791ZM43.2863 12.4791C43.2863 13.029 43.1644 13.4973 42.9201 13.8842C42.6762 14.2712 42.3453 14.5971 41.9283 14.8619C41.5113 15.1268 41.018 15.3253 40.4484 15.4576C39.8785 15.5898 39.2784 15.6561 38.6478 15.6561H27.3257C26.7153 15.6561 26.1355 15.5796 25.5861 15.4271C25.0369 15.2741 24.5537 15.0604 24.1366 14.7854C23.7196 14.5104 23.3889 14.1797 23.1447 13.7927C22.9007 13.4058 22.7784 12.968 22.7784 12.4791V3.46755C22.7784 3.01959 22.9007 2.6071 23.1447 2.23038C23.3889 1.85365 23.7196 1.52772 24.1366 1.25273C24.5537 0.978023 25.0369 0.759081 25.5861 0.596045C26.1355 0.433293 26.7254 0.351562 27.3562 0.351562H38.6478C40.072 0.351562 41.2011 0.61137 42.0352 1.13056C42.8283 1.62421 43.2445 2.38078 43.2832 3.39915C43.2847 3.44257 43.2706 3.48046 43.2404 3.51196C43.2103 3.54318 43.173 3.55921 43.1295 3.55921H28.1829C28.0132 3.55921 27.8748 3.69756 27.8748 3.8674V12.2012C27.8748 12.3711 28.0132 12.5096 28.1829 12.5096H37.9123C38.0821 12.5096 38.2203 12.3711 38.2203 12.2012C38.2203 10.9547 38.2203 9.70888 38.2203 8.46277C38.2203 8.3958 38.1796 8.33875 38.1165 8.3169C38.053 8.29505 37.9863 8.31506 37.945 8.36784L37.1365 9.40182C37.0157 9.55634 36.8473 9.63836 36.6514 9.63836H34.5585C33.3376 9.63836 32.2848 9.38366 31.3997 8.87469C30.4094 8.30456 29.9196 7.69044 29.9196 6.5543C29.9196 6.46959 29.9889 6.4002 30.0737 6.4002H42.9783C43.1481 6.4002 43.2863 6.53855 43.2863 6.70854V12.4791ZM84.6716 12.4791C84.6716 13.5787 84.2188 14.3884 83.3133 14.9076C82.4081 15.4271 81.2229 15.6866 79.758 15.6866H68.8938C68.2834 15.6866 67.6884 15.6203 67.1084 15.4881C66.5287 15.3558 66.0097 15.1521 65.552 14.8771C65.0944 14.6024 64.7281 14.2712 64.4534 13.8842C64.2073 13.5375 64.0708 13.1336 64.0456 12.6723C64.0432 12.6286 64.0573 12.5897 64.0875 12.558C64.1177 12.5259 64.1556 12.5096 64.1997 12.5096H79.2671C79.4368 12.5096 79.575 12.3711 79.575 12.2012C79.575 10.9533 79.5747 9.70576 79.5747 8.45809C79.5747 8.39126 79.534 8.33421 79.4709 8.31222C79.4074 8.29037 79.3406 8.31038 79.2994 8.36316L78.4872 9.40182C78.3664 9.55634 78.198 9.63836 78.0021 9.63836H68.6801C68.0697 9.63836 67.4848 9.57195 66.9254 9.43971C66.3658 9.30718 65.8723 9.1037 65.4451 8.82871C65.018 8.55372 64.6774 8.21758 64.4229 7.82056C64.1685 7.4234 64.0413 6.9499 64.0413 6.4002V3.86471C64.0413 3.25357 64.1685 2.72431 64.4229 2.27635C64.6774 1.82797 65.018 1.46145 65.4451 1.17653C65.8723 0.891326 66.3658 0.6826 66.9254 0.550072C67.4848 0.417827 68.0797 0.351562 68.7105 0.351562H79.8189C81.2838 0.351562 82.4588 0.601295 83.3438 1.10005C84.1871 1.57525 84.6288 2.3419 84.6685 3.39915C84.67 3.44257 84.6558 3.48046 84.6257 3.51196C84.5955 3.54318 84.5582 3.55921 84.5148 3.55921H69.568C69.3983 3.55921 69.2601 3.69756 69.2601 3.8674V6.09187C69.2601 6.26172 69.3983 6.4002 69.568 6.4002H79.7884C80.399 6.4002 80.9992 6.45625 81.589 6.56821C82.1791 6.68016 82.6978 6.85838 83.1453 7.10286C83.5933 7.34692 83.9594 7.66788 84.244 8.06504C84.529 8.46206 84.6716 8.91527 84.6716 9.42438V12.4791ZM102.017 15.6561C101.388 15.6561 100.862 15.605 100.446 15.5035C100.029 15.4021 99.6619 15.2791 99.3469 15.1369C99.0318 14.9944 98.7516 14.8311 98.5076 14.6479C98.2636 14.4652 98.0194 14.2916 97.7752 14.1287L92.0996 8.76798C91.9807 8.65574 91.8402 8.59998 91.6771 8.59998L90.7274 8.59955C90.6605 8.59955 90.6037 8.63999 90.5817 8.70356C90.5599 8.76671 90.5796 8.83368 90.6323 8.87497L91.685 9.69966C91.8394 9.82055 91.9213 9.98912 91.9213 10.1852C91.9213 11.9062 91.9213 13.6268 91.9213 15.3479C91.9213 15.5177 91.7829 15.6561 91.6133 15.6561H87.1327C86.9365 15.6561 86.8248 15.5014 86.8248 15.3096V0.659897C86.8248 0.489909 86.963 0.351562 87.1327 0.351562H91.6133C91.7829 0.351562 91.9213 0.489909 91.9213 0.659897V6.72698C91.9213 6.79084 91.9579 6.84532 92.0167 6.86973C92.0758 6.89371 92.1403 6.8808 92.1849 6.83525L98.5741 0.351562H103.856C103.919 0.351562 103.973 0.38732 103.998 0.445638C104.023 0.503814 104.011 0.567667 103.967 0.612931L97.4763 7.30932C97.3584 7.4312 97.3612 7.62659 97.4829 7.74493L105.343 15.3913C105.389 15.436 105.402 15.5004 105.379 15.5596C105.355 15.6192 105.3 15.6561 105.236 15.6561H102.017ZM108.112 15.4271C107.563 15.2744 107.08 15.0604 106.663 14.7854C106.246 14.5104 105.915 14.1797 105.671 13.7927C105.427 13.4058 105.305 12.968 105.305 12.4791V0.659897C105.305 0.489909 105.443 0.351562 105.613 0.351562H110.093C110.263 0.351562 110.401 0.489909 110.401 0.659897V15.3469C110.401 15.4323 110.371 15.5057 110.31 15.5658C110.25 15.6258 110.176 15.6558 110.091 15.6552C109.412 15.6508 108.809 15.6206 108.112 15.4271ZM130.597 15.5951C130.332 15.5951 130.007 15.5796 129.62 15.5491C129.233 15.5186 128.816 15.4473 128.369 15.3355C127.921 15.2233 127.474 15.0604 127.026 14.8466C126.579 14.6329 126.161 14.3424 125.775 13.9759L120.312 8.84375L118.445 7.11421C118.326 7.00439 118.188 6.95018 118.027 6.95018H117.075C117.008 6.95018 116.951 6.99091 116.929 7.05405C116.908 7.11762 116.927 7.18445 116.98 7.22588L118.031 8.04929C118.185 8.17019 118.267 8.33875 118.267 8.53485V15.2867C118.267 15.4567 118.129 15.5951 117.959 15.5951H113.479C113.309 15.5951 113.171 15.4567 113.171 15.2867V0.659897C113.171 0.489909 113.309 0.351562 113.479 0.351562H114.209C114.473 0.351562 114.809 0.366887 115.216 0.397536C115.623 0.428043 116.045 0.499274 116.482 0.61137C116.92 0.723324 117.367 0.886076 117.825 1.10005C118.283 1.31403 118.705 1.6042 119.092 1.97071L124.524 7.10286C124.873 7.45277 125.287 7.798 125.653 8.14152C125.906 8.37891 126.141 8.59189 126.357 8.78033C126.473 8.88136 126.605 8.93102 126.759 8.93173L127.724 8.93542C127.791 8.9357 127.848 8.89526 127.87 8.83183C127.891 8.76855 127.872 8.70129 127.819 8.66L126.774 7.84113C126.62 7.72038 126.538 7.55167 126.538 7.35557V0.660181C126.538 0.490335 126.676 0.351846 126.846 0.351846H131.326C131.512 0.351846 131.634 0.499274 131.634 0.683594V15.2867C131.634 15.4567 131.496 15.5951 131.326 15.5951H130.597Z" fill="white"/>
                          <path d="M52.0616 4.2088V0.659897C52.0616 0.489909 52.2 0.351562 52.3696 0.351562H54.9581C55.1277 0.351562 55.2661 0.489909 55.2661 0.659897V4.2088C55.2661 4.37865 55.1277 4.51699 54.9581 4.51699H52.3696C52.2 4.51699 52.0616 4.37865 52.0616 4.2088ZM46.3119 6.41524H49.8572C50.027 6.41524 50.1652 6.55373 50.1652 6.72358V9.31456C50.1652 9.4844 50.027 9.62289 49.8572 9.62289H46.3119C46.1421 9.62289 46.0039 9.4844 46.0039 9.31456V6.72358C46.0039 6.55373 46.1421 6.41524 46.3119 6.41524ZM57.4705 6.41524H61.0159C61.1856 6.41524 61.3238 6.55373 61.3238 6.72358V9.31456C61.3238 9.4844 61.1856 9.62289 61.0159 9.62289H57.4705C57.3007 9.62289 57.1625 9.4844 57.1625 9.31456V6.72358C57.1625 6.55373 57.3007 6.41524 57.4705 6.41524ZM52.0616 15.3784V11.8295C52.0616 11.6595 52.2 11.5211 52.3696 11.5211H54.9581C55.1277 11.5211 55.2661 11.6595 55.2661 11.8295V15.3784C55.2661 15.5482 55.1277 15.6866 54.9581 15.6866H52.3696C52.2 15.6866 52.0616 15.5482 52.0616 15.3784Z" fill="#FF8753"/>
                      </svg>
                  </a>
                  <nav className="ml-12">
                      <ul className="flex space-x-12">
                          <li className="flex">
                              <a href="https://" className="flex text-typography-200 transition-colors hover:text-typography">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M3 3H3.26835C3.74213 3 3.97922 3 4.17246 3.08548C4.34283 3.16084 4.48871 3.2823 4.59375 3.43616C4.71289 3.61066 4.75578 3.84366 4.8418 4.30957L7.00004 16L17.4195 16C17.8739 16 18.1016 16 18.2896 15.9198C18.4554 15.8491 18.5989 15.7348 18.7051 15.5891C18.8255 15.424 18.8763 15.2025 18.9785 14.7597L20.5477 7.95972C20.7022 7.29025 20.7796 6.95561 20.6946 6.69263C20.6201 6.46207 20.4639 6.26634 20.256 6.14192C20.0189 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z" stroke="#15718E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span className="ml-3">Store</span>
                              </a>
                          </li>
                          <li className="flex">
                              <a href="https://" className="flex text-typography-200 transition-colors hover:text-typography">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M3.8499 5.72766C3.8499 5.66871 3.87721 5.52034 4.12588 5.29127C4.37536 5.06147 4.78319 4.81544 5.35873 4.5912C6.50445 4.14482 8.14506 3.85039 9.9999 3.85039C11.8547 3.85039 13.4954 4.14482 14.6411 4.5912C15.2166 4.81544 15.6244 5.06147 15.8739 5.29127C16.1226 5.52034 16.1499 5.66871 16.1499 5.72766C16.1499 5.78662 16.1226 5.93499 15.8739 6.16406C15.6244 6.39386 15.2166 6.63989 14.6411 6.86413C13.4954 7.31051 11.8547 7.60494 9.9999 7.60494C8.14506 7.60494 6.50445 7.31051 5.35873 6.86413C4.78319 6.63989 4.37536 6.39386 4.12588 6.16406C3.87721 5.93499 3.8499 5.78662 3.8499 5.72766ZM15.2582 8.44815C15.5735 8.32531 15.8734 8.18743 16.1499 8.03366V9.77312C16.1499 9.83207 16.1226 9.98044 15.8739 10.2095C15.6244 10.4393 15.2166 10.6853 14.6411 10.9096C13.4954 11.356 11.8547 11.6504 9.9999 11.6504C8.14506 11.6504 6.50445 11.356 5.35873 10.9096C4.78319 10.6853 4.37536 10.4393 4.12588 10.2095C3.87721 9.98044 3.8499 9.83207 3.8499 9.77312V8.03366C4.12641 8.18743 4.42631 8.32531 4.74158 8.44815C6.12936 8.98884 7.98875 9.30494 9.9999 9.30494C12.0111 9.30494 13.8704 8.98884 15.2582 8.44815ZM17.8499 7.83416V5.72766C17.8499 5.0335 17.4855 4.46441 17.0257 4.0409C16.5667 3.61813 15.9494 3.27648 15.2582 3.00718C13.8704 2.46649 12.0111 2.15039 9.9999 2.15039C7.98875 2.15039 6.12936 2.46649 4.74158 3.00718C4.05037 3.27648 3.43307 3.61813 2.97411 4.0409C2.51435 4.46441 2.1499 5.0335 2.1499 5.72766V9.77312C2.1499 10.4673 2.51435 11.0364 2.97411 11.4599C3.43307 11.8827 4.05037 12.2243 4.74158 12.4936C4.87352 12.545 5.00972 12.5944 5.1499 12.6416V18.3754C5.1499 19.0682 5.52737 19.6265 5.9861 20.0332C6.44583 20.4408 7.06256 20.769 7.7517 21.0274C9.13625 21.5466 10.992 21.8504 12.9999 21.8504C15.0078 21.8504 16.8636 21.5466 18.2481 21.0274C18.9372 20.769 19.554 20.4408 20.0137 20.0332C20.4724 19.6265 20.8499 19.0682 20.8499 18.3754L20.8499 10.6254C20.8499 9.93256 20.4724 9.3743 20.0137 8.96759C19.554 8.56 18.9372 8.23177 18.2481 7.97334C18.1194 7.92506 17.9865 7.87864 17.8499 7.83416ZM17.8499 9.64312V9.77312C17.8499 10.4673 17.4855 11.0364 17.0257 11.4599C16.7581 11.7064 16.4366 11.9253 16.0781 12.1184C16.668 12.0026 17.1981 11.8556 17.6512 11.6857C18.2288 11.469 18.6372 11.2316 18.8859 11.0111C19.1356 10.7897 19.1499 10.6574 19.1499 10.6254C19.1499 10.5933 19.1356 10.461 18.8859 10.2396C18.6667 10.0453 18.3236 9.83787 17.8499 9.64312ZM6.8499 13.0746C7.06393 13.1142 7.2829 13.1497 7.50624 13.1811C7.58691 13.2142 7.66878 13.2463 7.7517 13.2774C9.13625 13.7966 10.992 14.1004 12.9999 14.1004C15.0078 14.1004 16.8636 13.7966 18.2481 13.2774C18.567 13.1578 18.8704 13.0233 19.1499 12.8729L19.1499 14.5004C19.1498 14.533 19.1348 14.6655 18.8859 14.8861C18.6372 15.1066 18.2288 15.344 17.6512 15.5607C16.5022 15.9915 14.858 16.2754 12.9999 16.2754C11.1418 16.2754 9.49756 15.9915 8.34861 15.5607C7.771 15.344 7.36261 15.1066 7.11389 14.8861C6.8644 14.6649 6.84993 14.5327 6.8499 14.5005L6.8499 13.0746ZM19.1499 16.7479C18.8704 16.8983 18.567 17.0328 18.2481 17.1524C16.8636 17.6716 15.0078 17.9754 12.9999 17.9754C10.992 17.9754 9.13625 17.6716 7.7517 17.1524C7.4328 17.0328 7.12941 16.8983 6.8499 16.7479V18.3754C6.8499 18.4074 6.86419 18.5397 7.11389 18.7611C7.36261 18.9816 7.771 19.219 8.34861 19.4357C9.49756 19.8665 11.1418 20.1504 12.9999 20.1504C14.858 20.1504 16.5022 19.8665 17.6512 19.4357C18.2288 19.219 18.6372 18.9816 18.8859 18.7611C19.1356 18.5397 19.1499 18.4074 19.1499 18.3754V16.7479Z" fill="#15718E"/>
                                  </svg>
                                  <span className="ml-3">Sell</span>
                              </a>
                          </li>
                          <li className="flex">
                              <a href="https://" className="flex text-typography-200 transition-colors hover:text-typography">
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="12.5" cy="12" r="9.25" stroke="#15718E" strokeWidth="1.5"/>
                                      <path d="M11.1648 13.9474V13.7784C11.1681 13.1984 11.2195 12.736 11.3189 12.3913C11.4216 12.0466 11.5708 11.7682 11.7663 11.5561C11.9619 11.344 12.1972 11.1518 12.4723 10.9794C12.6778 10.8468 12.8617 10.7093 13.0241 10.5668C13.1866 10.4242 13.3158 10.2668 13.4119 10.0945C13.508 9.9188 13.5561 9.72325 13.5561 9.50781C13.5561 9.27912 13.5014 9.0786 13.392 8.90625C13.2827 8.7339 13.1352 8.60133 12.9496 8.50852C12.7673 8.41572 12.5651 8.36932 12.343 8.36932C12.1276 8.36932 11.9238 8.41738 11.7315 8.51349C11.5393 8.6063 11.3819 8.7455 11.2592 8.93111C11.1366 9.1134 11.0703 9.34044 11.0604 9.61222H9.03196C9.04853 8.94934 9.20762 8.40246 9.50923 7.97159C9.81084 7.53741 10.2102 7.21425 10.7074 7.00213C11.2045 6.78669 11.7531 6.67898 12.353 6.67898C13.0125 6.67898 13.5959 6.78835 14.103 7.0071C14.6101 7.22254 15.0078 7.53575 15.2962 7.94673C15.5845 8.35772 15.7287 8.85322 15.7287 9.43324C15.7287 9.82102 15.6641 10.1657 15.5348 10.4673C15.4089 10.7656 15.2315 11.0308 15.0028 11.2628C14.7741 11.4915 14.504 11.6986 14.1925 11.8842C13.9306 12.04 13.7152 12.2024 13.5462 12.3714C13.3804 12.5405 13.2562 12.736 13.1733 12.9581C13.0938 13.1802 13.0523 13.4536 13.049 13.7784V13.9474H11.1648ZM12.1491 17.1293C11.8177 17.1293 11.5343 17.0133 11.299 16.7812C11.067 16.5459 10.9527 16.2642 10.956 15.9361C10.9527 15.6113 11.067 15.3329 11.299 15.1009C11.5343 14.8688 11.8177 14.7528 12.1491 14.7528C12.464 14.7528 12.7408 14.8688 12.9794 15.1009C13.218 15.3329 13.339 15.6113 13.3423 15.9361C13.339 16.1548 13.281 16.3554 13.1683 16.5376C13.0589 16.7166 12.9148 16.8608 12.7358 16.9702C12.5568 17.0762 12.3613 17.1293 12.1491 17.1293Z" fill="#15718E"/>
                                  </svg>
                                  <span className="ml-3">Store</span>
                              </a>
                          </li>
                      </ul>
                  </nav>
                  <div className="ml-auto flex items-center">
                      <a href="https://" className="w-12 h-12 rounded-3xl bg-interface-300 flex transition-colors hover:bg-interface-400">
                          <svg className="m-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 3.5H3.81307C4.36581 3.5 4.64243 3.5 4.86787 3.59972C5.06664 3.68765 5.23683 3.82935 5.35937 4.00885C5.49837 4.21244 5.54841 4.48428 5.64876 5.02783L8.16671 18.6667L20.3227 18.6667C20.8529 18.6667 21.1185 18.6667 21.3379 18.5731C21.5313 18.4906 21.6987 18.3573 21.8226 18.1873C21.9631 17.9947 22.0224 17.7363 22.1416 17.2197L23.9724 9.28634C24.1526 8.50529 24.2429 8.11488 24.1437 7.80806C24.0568 7.53908 23.8746 7.31073 23.632 7.16557C23.3554 7 22.9551 7 22.1535 7H6.41667M21 24.5C20.3557 24.5 19.8333 23.9777 19.8333 23.3333C19.8333 22.689 20.3557 22.1667 21 22.1667C21.6443 22.1667 22.1667 22.689 22.1667 23.3333C22.1667 23.9777 21.6443 24.5 21 24.5ZM9.33333 24.5C8.689 24.5 8.16667 23.9777 8.16667 23.3333C8.16667 22.689 8.689 22.1667 9.33333 22.1667C9.97767 22.1667 10.5 22.689 10.5 23.3333C10.5 23.9777 9.97767 24.5 9.33333 24.5Z" stroke="#F1F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </a>
                      <a href="https://" className="h-10 px-5 rounded-lg bg-interface-700 ml-8 flex items-center text-typography-500 font-bold text-sm">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.5482 7.94202C17.4991 8.62911 16.8533 9.37579 15.9776 9.31609C15.2905 9.26925 14.5865 8.60371 14.6526 7.74548C14.7017 7.10746 15.2978 6.36074 16.1741 6.42048C17.0498 6.48018 17.5973 7.25493 17.5482 7.94202ZM16.0265 10.7394L13.4252 12.6532C13.4252 12.8005 13.3932 12.9768 13.3761 13.0458C13.0243 14.4678 12.0018 14.8125 11.3638 14.8125C10.2841 14.7633 9.54794 14.1743 9.2535 13.1447L4.50996 11.184C4.11588 11.4365 3.61972 11.5386 3.11244 11.504C2.14899 11.4383 1.12798 10.5305 1.27374 9.14983C1.37969 8.14623 2.33647 7.28404 3.39748 7.35637C4.45849 7.4287 5.16214 8.1499 5.32519 8.96676L10.1371 10.9363C10.5297 10.6909 10.7751 10.5928 11.3641 10.5928L13.2313 7.8926C13.232 7.85196 13.2259 7.68094 13.2313 7.60144C13.3363 6.06092 14.7011 4.89932 16.2793 5.00691C17.8573 5.11449 19.0207 6.4207 18.9715 7.99121C18.9223 9.61079 17.548 10.7886 16.0265 10.7394ZM4.76618 8.73337C4.5312 8.24602 4.09071 7.87944 3.39748 7.83218C2.73977 7.78734 1.87448 8.26295 1.75488 9.14983C1.63842 10.0134 2.20473 10.8411 3.11244 10.9885C3.27125 11.0142 3.59344 11.0228 3.95096 10.9272L2.76863 10.4386C2.29609 10.198 2.15768 9.63597 2.42496 8.96676C2.78585 8.40416 3.34536 8.05654 4.23177 8.51656L4.76618 8.73337ZM14.2109 7.70495C14.1293 8.90154 15.0222 9.696 15.9285 9.75779C16.8119 9.81801 17.9574 9.18772 18.039 7.99113C18.0881 7.05865 17.4488 6.01325 16.2232 5.9297C14.9472 5.88053 14.2109 6.91111 14.2109 7.70495ZM12.8853 12.8996C13.0196 11.92 12.168 11.0836 11.364 11.0836C11.233 11.0747 10.9223 11.0836 10.726 11.1817L11.877 11.6402C12.4545 11.9946 12.5909 12.7524 12.2692 13.3001C11.9085 13.8637 11.1479 14.0321 10.5707 13.6784L9.84242 13.3902C10.1368 13.9791 10.8506 14.3228 11.3638 14.3228C11.877 14.3228 12.7351 13.9956 12.8853 12.8996Z" fill="#15718E"/>
                          </svg>
                          <span className="ml-3">Sign in with steam</span>
                      </a>
                  </div>
              </div>
              <div className="w-full max-w-sub mx-auto">
                  <div className="max-w-xl mt-[10rem] font-medium">
                      <h1 className="text-7xl leading-[1.1] font-bold text-typography-100">
                          Catch up trades with up to 0% fees!
                      </h1>
                      <p className="mt-6 text-lg text-typography-200 leading-[1.3]">
                          Maximize your profits with minimal fees — trade smarter on gg.skins.
                      </p>
                      <div className="mt-6 font-medium">
                          <h3 className="text-lg text-typography-200 leading-[1.3]">
                              How many deals?
                          </h3>
                          <ul className="flex mt-2 mb-14 space-x-2">
                              <li className="flex h-12 w-12 border border-interface-500 items-center justify-center rounded-lg">0</li>
                              <li className="flex h-12 w-12 border border-interface-500 items-center justify-center rounded-lg">0</li>
                              <li className="flex h-12 w-12 border border-interface-500 items-center justify-center rounded-lg">2</li>
                              <li className="flex h-12 w-12 border border-interface-500 items-center justify-center rounded-lg">4</li>
                              <li className="flex h-12 w-12 border border-interface-500 items-center justify-center rounded-lg">6</li>
                              <li className="flex h-12 w-12 border border-interface-500 items-center justify-center rounded-lg">9</li>
                          </ul>
                          <a href="#" className="transition-colors inline-block py-6 px-20 rounded-lg bg-primary text-lg text-interface font-bold hover:bg-primary-300">Trade now</a>
                      </div>
                  </div>
              </div>
          </header>
          <section className="relative max-w-sub mx-auto mt-16">
              <div className="p2p shadow-p2p overflow-hidden relative w-full bg-p2p rounded-[40px] flex pb-24 pt-[31rem] flex-col shadow-xl">
                  <div className="mx-auto max-w-[50rem] relative">
                      <h3 className="text-typography-100 font-bold text-[56px]">P2P Trading</h3>
                      <p className="text-typography-200 text-[28px] leading-[1.3] mt-6">
                          Enhance your Steam trading experience by purchasing and selling skins without the need for a
                          transfer to DMarket. Cut your trade lock time in half with each trade operation. Enjoy using
                          your item in the game before making a sale.
                      </p>
                      <ul className="flex my-24">
                          <li className="relative pt-[196px] w-1/2 text-center">
                              <img src="images/p2p/low-comission.png" alt="Low Comission" className="w-[260px] mx-auto absolute left-0 right-0 top-0" />
                              <h3 className="text-typography-100 font-bold text-[40px] relative">Low comission</h3>
                              <p className="text-typography-300 font-medium text-2xl mt-3">From 0% up to 4%.</p>
                          </li>
                          <li className="relative pt-[196px] w-1/2 text-center">
                              <img src="images/p2p/fastest-sell.png" alt="Fastest sell" className="w-[260px] mx-auto absolute left-0 right-0 top-0" />
                              <h3 className="text-typography-100 font-bold text-[40px] relative">Fastest sell</h3>
                              <p className="text-typography-300 font-medium text-2xl mt-3">Speediest purchases.</p>
                          </li>
                      </ul>
                  </div>
                  <ul className="flex justify-center space-x-[72px]">
                      <li className="flex rounded-lg bg-darkGray w-[170px] h-[84px]">
                          <img src="images/payment/mc.svg" alt="Crypto" className="w-[100px] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[170px] h-[84px]">
                          <img src="images/payment/visa.svg" alt="Crypto" className="w-[127px] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[170px] h-[84px]">
                          <img src="images/payment/tether.svg" alt="Crypto" className="w-[142px] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[170px] h-[84px]">
                          <img src="images/payment/eth.svg" alt="Crypto" className="w-[137px] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[170px] h-[84px]">
                          <img src="images/payment/btc.svg" alt="Crypto" className="w-[137px] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[170px] h-[84px]">
                          <img src="images/payment/crypto.svg" alt="Crypto" className="w-[127px] m-auto" />
                      </li>
                  </ul>
              </div>
          </section>
          <section className="relative max-w-sub mx-auto my-40">
              <div className="relative flex items-center">
                  <h3 className="main-title">Was purchased just now</h3>
                  <a className="text-primary-400 ml-auto text-2xl uppercase font-semibold hover:text-primary-200 transition-colors" href="https://">Show all items</a>
              </div>
              <div className="relative mt-[56px] h-[344px] w-full">
                  <ul className="flex h-full absolute top-0 space-x-8 w-[500rem]">
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-01.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">AK-47</h4>
                                  <h4 className="text-typography-100 my-1">Aquamarine Revenge</h4>
                                  <h4 className="text-typography-300 font-normal">FN / 0.06090110</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 175.68</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 168.09</h4>
                          </div>
                          <span className="purchased-discount">-4%</span>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-02.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">M4A1-S</h4>
                                  <h4 className="text-typography-100 my-1">Printstream</h4>
                                  <h4 className="text-typography-300 font-normal">MW / 0.11612700</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 226.37</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 226.27</h4>
                          </div>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-03.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">AWP</h4>
                                  <h4 className="text-typography-100 my-1">Wildfire</h4>
                                  <h4 className="text-typography-300 font-normal">MW / 0.11988400</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 76.78</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 74.09</h4>
                          </div>
                          <span className="purchased-discount">-4%</span>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-04.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">USP-S</h4>
                                  <h4 className="text-typography-100 my-1">Blue Print</h4>
                                  <h4 className="text-typography-300 font-normal">FN / 0.06090110</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 5.05</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 4.83</h4>
                          </div>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-05.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">Glock-18</h4>
                                  <h4 className="text-typography-100 my-1">Water Elemental</h4>
                                  <h4 className="text-typography-300 font-normal">FT / 0.29176400</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 10.82</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 10.20</h4>
                          </div>
                          <span className="purchased-discount">-6%</span>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-06.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-stattrack">ST™ AK-47</h4>
                                  <h4 className="text-typography-100 my-1">Aquamarine Revenge</h4>
                                  <h4 className="text-typography-300 font-normal">FN / 0.06090110</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 175.68</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 168.09</h4>
                          </div>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-01.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">AK-47</h4>
                                  <h4 className="text-typography-100 my-1">Aquamarine Revenge</h4>
                                  <h4 className="text-typography-300 font-normal">FN / 0.06090110</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 175.68</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 168.09</h4>
                          </div>
                          <span className="purchased-discount">-4%</span>
                      </li>
                      <li className="flex h-full w-[290px] bg-interface-100 rounded-lg relative">
                          <div className="absolute w-full h-44 flex top-4">
                              <img src="images/purchased/item-02.png" alt="Item" className="m-auto max-w-[240px]" />
                          </div>
                          <div className="absolute right-4 top-4 w-8 space-y-[6px]">
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                              <img src="images/purchased/sticker.png" alt="Sticker" className="w-full" />
                          </div>
                          <h4 className="purchased-bolt">15m</h4>
                          <div className="absolute left-4 bottom-4">
                              <div className="font-medium text-sm">
                                  <h4 className="text-typography-300">M4A1-S</h4>
                                  <h4 className="text-typography-100 my-1">Printstream</h4>
                                  <h4 className="text-typography-300 font-normal">MW / 0.11612700</h4>
                              </div>
                              <h4 className="text-typography-400 mt-2 text-[10px]">Recommended: $ 226.37</h4>
                              <h4 className="text-typography-100 mt-1 text-lg font-bold">$ 226.27</h4>
                          </div>
                      </li>
                  </ul>
              </div>
          </section>
          <section className="relative">
              <div className="max-w-sub mx-auto">
                  <h3 className="main-title">About us</h3>
                  <div className="flex mt-[56px] flex-row space-x-8">
                      <div className="basis-1/3 space-y-8 flex flex-col">
                          <div className="w-full flex h-[24rem] bg-about-us rounded-xl p-12 flex-col relative">
                              <h3 className="font-bold text-typography-100 text-[40px] leading-[1.2]">Trade with confidence</h3>
                              <p className="font-medium mt-4 text-typography-300 text-2xl max-w-xs">Seconds away from your first trade offer</p>
                              <img src="images/about/confidence.png" alt="Confidence" className="w-[14.25rem] absolute right-0 bottom-0" />
                          </div>
                          <div className="w-full flex h-[24rem] bg-about-us rounded-xl p-12 flex-col relative">
                              <h3 className="font-bold text-typography-100 text-[40px] leading-[1.2]">Unique skins</h3>
                              <p className="font-medium mt-4 text-typography-300 text-2xl max-w-xs">Thousands of unique skins with no tradelock.</p>
                              <img src="images/about/unique.png" alt="Unique" className="w-[14.25rem] absolute right-0 bottom-0" />
                          </div>
                      </div>
                      <div className="basis-1/3 flex h-[50rem] bg-about-us rounded-xl p-12 flex-col relative">
                          <h3 className="font-bold text-typography-100 text-[40px] leading-[1.2]">24/7 Support</h3>
                          <p className="font-medium mt-4 text-typography-300 text-2xl max-w-xs">Chat with us anytime.</p>
                          <img src="images/about/support.png" alt="Support" className="w-full absolute right-0 bottom-0" />
                      </div>
                      <div className="basis-1/3 flex h-[50rem] bg-about-us rounded-xl p-12 flex-col relative">
                          <h3 className="font-bold text-typography-100 text-[40px] leading-[1.2]">Cashout</h3>
                          <p className="font-medium mt-4 text-typography-300 text-2xl max-w-xs">Simple way to transfer your skin to real money.</p>
                          <img src="images/about/cashout.png" alt="Cashout" className="w-[23.625rem] absolute right-0 left-0 bottom-0 mx-auto" />
                      </div>
                  </div>
              </div>
          </section>
          <section className="relative mt-40">
              <div className="max-w-sub mx-auto">
                  <h3 className="main-title">First steps</h3>
                  <ul className="flex space-x-8 mt-[3rem]">
                      <li className="basis-1/5">
                          <div className="border-4 rounded-t-[2.5rem] rounded-br-[2.5rem] bg-interface-300 border-interface-300 h-[24.125rem] w-full">
                              <div className="relative w-full h-[16rem]">
                                  <img src="images/steps/step-01.png" alt="Step 1" width="292px" className="absolute left-0 right-0 top-0 bottom-0 m-auto" />
                              </div>
                              <div className="pb-8 px-8">
                                  <h3 className="text-typography-100 font-bold text-2xl mb-4">Sign in with steam</h3>
                                  <p className="text-[18px] leading-[1.3] text-typography-200">You can log in with Steam by clicking on this card.</p>
                              </div>
                          </div>
                          <h3 className="font-bold text-typography-400 mt-3 text-[2.5rem] leading-[3rem]">1</h3>
                      </li>
                      <li className="basis-1/5">
                          <div className="border-4 rounded-t-[2.5rem] rounded-br-[2.5rem] border-interface-400 h-[24.125rem] w-full">
                              <div className="p-8 h-[16rem] flex">
                                  <img src="images/steps/step-02.png" alt="Step 2" width="259px" className="m-auto" />
                              </div>
                              <div className="pb-8 px-8">
                                  <h3 className="text-typography-100 font-bold text-2xl mb-4">Add your Trade URL</h3>
                                  <p className="text-[18px] leading-[1.3] text-typography-200">We need this link to send you trade offers.</p>
                              </div>
                          </div>
                          <h3 className="font-bold text-typography-400 mt-3 text-[2.5rem] leading-[3rem]">2</h3>
                      </li>
                      <li className="basis-1/5">
                          <div className="border-4 rounded-t-[2.5rem] rounded-br-[2.5rem] border-interface-400 h-[24.125rem] w-full">
                              <div className="p-8 h-[16rem] flex">
                                  <img src="images/steps/step-03.png" alt="Step 3" width="259px" className="m-auto" />
                              </div>
                              <div className="pb-8 px-8">
                                  <h3 className="text-typography-100 font-bold text-2xl mb-4">Install our extension</h3>
                                  <p className="text-[18px] leading-[1.3] text-typography-200">Confirm the creation of trade offers in extension.</p>
                              </div>
                          </div>
                          <h3 className="font-bold text-typography-400 mt-3 text-[2.5rem] leading-[3rem]">3</h3>
                      </li>
                      <li className="basis-1/5">
                          <div className="border-4 rounded-t-[2.5rem] rounded-br-[2.5rem] border-interface-400 h-[24.125rem] w-full">
                              <div className="p-8 h-[16rem] flex">
                                  <img src="images/steps/step-04.png" alt="Step 4" width="259px" className="m-auto" />
                              </div>
                              <div className="pb-8 px-8">
                                  <h3 className="text-typography-100 font-bold text-2xl mb-4">Enter your API-key</h3>
                                  <p className="text-[18px] leading-[1.3] text-typography-200">We use the API key only to create secure trade offers.</p>
                              </div>
                          </div>
                          <h3 className="font-bold text-typography-400 mt-3 text-[2.5rem] leading-[3rem]">4</h3>
                      </li>
                      <li className="basis-1/5">
                          <div className="border-4 rounded-t-[2.5rem] rounded-br-[2.5rem] border-interface-400 h-[24.125rem] w-full">
                              <div className="p-8 h-[16rem] flex">
                                  <img src="images/steps/step-05.png" alt="Step 5" width="259px" className="m-auto" />
                              </div>
                              <div className="pb-8 px-8">
                                  <h3 className="text-typography-100 font-bold text-2xl mb-4">Buy, sell, and trade</h3>
                                  <p className="text-[18px] leading-[1.3] text-typography-200">Join now and elevate your CS:GO experience.</p>
                              </div>
                          </div>
                          <h3 className="font-bold text-typography-400 mt-3 text-[2.5rem] leading-[3rem]">5</h3>
                      </li>
                  </ul>
              </div>
          </section>
          <footer className="relative max-w-main mx-auto mt-[6rem] pt-12 px-8">
              <div className="flex flex-wrap">
                  <div className="max-w-sm">
                      <h3 className="text-typography-100 font-bold text-2xl">Contacts</h3>
                      <p className="text-sm text-typography-200 mt-4">
                          Company number 13246765, 16 John Nicholas Crescent, Ellesmere Port, Cheshire, United Kingdom, CH65 2DL
                      </p>
                      <p className="text-sm text-typography-200 mt-2">
                          supportemail@gmail.com
                      </p>
                      <p className="text-sm text-typography-200 mt-2">
                          © 2023 GG.skin. All rights reserved
                      </p>
                  </div>
                  <div className="ml-auto">
                      <h3 className="text-typography-100 font-bold text-2xl mb-3">Learn more</h3>
                      <nav>
                          <ul className="flex flex-wrap w-[48rem]">
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Market</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Cookie Policy</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Refund Policy</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">FAQ</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Marker Manager</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Privacy Policy</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Terms & Conditions</a>
                              </li>
                              <li className="basis-1/4 pr-4 mt-4">
                                  <a href="https://" className="text-base text-typography-200 hover:text-typography-100 transition-colors">Browser extension</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
              <ul className="flex space-x-6 mt-11 mb-[3.75rem]">
                  <li className="flex">
                      <a href="https://" className="social-footer">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#B6C4C9"/>
                          </svg>
                      </a>
                  </li>
                  <li className="flex">
                      <a href="https://" className="social-footer">
                          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.2918 17.1246C13.8371 17.1246 17.9652 10.8719 17.9652 5.45118C17.9652 5.2754 17.9613 5.09572 17.9535 4.91993C18.7566 4.33918 19.4496 3.61985 20 2.79572C19.2521 3.12847 18.458 3.34579 17.6449 3.44025C18.5011 2.92706 19.1421 2.12086 19.4492 1.17111C18.6438 1.64843 17.763 1.98514 16.8445 2.16681C16.2257 1.50927 15.4075 1.0739 14.5164 0.92801C13.6253 0.782122 12.711 0.933842 11.9148 1.35971C11.1186 1.78559 10.4848 2.46189 10.1115 3.28406C9.73825 4.10623 9.64619 5.02848 9.84961 5.90822C8.21874 5.82638 6.62328 5.40272 5.16665 4.66472C3.71002 3.92671 2.42474 2.89083 1.39414 1.62423C0.870333 2.52734 0.710047 3.596 0.945859 4.61304C1.18167 5.63008 1.79589 6.51917 2.66367 7.09962C2.01219 7.07894 1.37498 6.90353 0.804688 6.5879V6.63868C0.804104 7.58643 1.13175 8.50512 1.73192 9.23861C2.3321 9.97209 3.16777 10.4751 4.09687 10.6621C3.49338 10.8272 2.85999 10.8513 2.2457 10.7324C2.50788 11.5475 3.01798 12.2604 3.70481 12.7716C4.39164 13.2828 5.22093 13.5668 6.07695 13.584C4.62369 14.7256 2.82848 15.3447 0.980469 15.3418C0.652739 15.3413 0.325333 15.3212 0 15.2817C1.87738 16.4861 4.06128 17.1258 6.2918 17.1246Z" fill="#B6C4C9"/>
                          </svg>
                      </a>
                  </li>
                  <li className="flex">
                      <a href="https://" className="social-footer">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="#B6C4C9"/>
                              <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="#B6C4C9"/>
                              <path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="#B6C4C9"/>
                          </svg>
                      </a>
                  </li>
              </ul>
              <div className="flex pt-6 pb-12 border-t border-interface-500 items-center">
                  <a href="https://" className="logo">
                      <svg width="132" height="16" viewBox="0 0 132 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.6251 12.4791C20.6251 13.029 20.5032 13.4973 20.259 13.8842C20.015 14.2712 19.6842 14.5971 19.2671 14.8619C18.8501 15.1268 18.3566 15.3253 17.7872 15.4576C17.2174 15.5898 16.6172 15.6561 15.9867 15.6561H4.66451C4.05411 15.6561 3.47434 15.5796 2.9249 15.4271C2.37575 15.2741 1.89251 15.0604 1.47547 14.7854C1.05843 14.5104 0.727579 14.1797 0.483337 13.7927C0.239521 13.4058 0.117188 12.968 0.117188 12.4791V3.46755C0.117188 3.01959 0.239521 2.6071 0.483337 2.23038C0.727579 1.85365 1.05843 1.52772 1.47547 1.25273C1.89251 0.978023 2.37575 0.759081 2.9249 0.596045C3.47434 0.433293 4.06418 0.351562 4.69498 0.351562H15.9867C17.4109 0.351562 18.5399 0.61137 19.374 1.13056C20.1671 1.62421 20.5833 2.38078 20.622 3.39915C20.6236 3.44257 20.6094 3.48046 20.5792 3.51196C20.549 3.54318 20.5119 3.55921 20.4683 3.55921H5.52169C5.35201 3.55921 5.21366 3.69756 5.21366 3.8674V12.2012C5.21366 12.3711 5.35201 12.5096 5.52169 12.5096H15.2511C15.4208 12.5096 15.5591 12.3711 15.5591 12.2012C15.5591 10.9547 15.5591 9.70888 15.5591 8.46277C15.5591 8.3958 15.5184 8.33875 15.4554 8.3169C15.3919 8.29505 15.3251 8.31506 15.2838 8.36784L14.4753 9.40182C14.3545 9.55634 14.1861 9.63836 13.9902 9.63836H11.8973C10.6764 9.63836 9.62362 9.38366 8.73851 8.87469C7.74822 8.30456 7.25846 7.69044 7.25846 6.5543C7.25846 6.46959 7.32777 6.4002 7.41254 6.4002H20.3171C20.4869 6.4002 20.6251 6.53855 20.6251 6.70854V12.4791ZM43.2863 12.4791C43.2863 13.029 43.1644 13.4973 42.9201 13.8842C42.6762 14.2712 42.3453 14.5971 41.9283 14.8619C41.5113 15.1268 41.018 15.3253 40.4484 15.4576C39.8785 15.5898 39.2784 15.6561 38.6478 15.6561H27.3257C26.7153 15.6561 26.1355 15.5796 25.5861 15.4271C25.0369 15.2741 24.5537 15.0604 24.1366 14.7854C23.7196 14.5104 23.3889 14.1797 23.1447 13.7927C22.9007 13.4058 22.7784 12.968 22.7784 12.4791V3.46755C22.7784 3.01959 22.9007 2.6071 23.1447 2.23038C23.3889 1.85365 23.7196 1.52772 24.1366 1.25273C24.5537 0.978023 25.0369 0.759081 25.5861 0.596045C26.1355 0.433293 26.7254 0.351562 27.3562 0.351562H38.6478C40.072 0.351562 41.2011 0.61137 42.0352 1.13056C42.8283 1.62421 43.2445 2.38078 43.2832 3.39915C43.2847 3.44257 43.2706 3.48046 43.2404 3.51196C43.2103 3.54318 43.173 3.55921 43.1295 3.55921H28.1829C28.0132 3.55921 27.8748 3.69756 27.8748 3.8674V12.2012C27.8748 12.3711 28.0132 12.5096 28.1829 12.5096H37.9123C38.0821 12.5096 38.2203 12.3711 38.2203 12.2012C38.2203 10.9547 38.2203 9.70888 38.2203 8.46277C38.2203 8.3958 38.1796 8.33875 38.1165 8.3169C38.053 8.29505 37.9863 8.31506 37.945 8.36784L37.1365 9.40182C37.0157 9.55634 36.8473 9.63836 36.6514 9.63836H34.5585C33.3376 9.63836 32.2848 9.38366 31.3997 8.87469C30.4094 8.30456 29.9196 7.69044 29.9196 6.5543C29.9196 6.46959 29.9889 6.4002 30.0737 6.4002H42.9783C43.1481 6.4002 43.2863 6.53855 43.2863 6.70854V12.4791ZM84.6716 12.4791C84.6716 13.5787 84.2188 14.3884 83.3133 14.9076C82.4081 15.4271 81.2229 15.6866 79.758 15.6866H68.8938C68.2834 15.6866 67.6884 15.6203 67.1084 15.4881C66.5287 15.3558 66.0097 15.1521 65.552 14.8771C65.0944 14.6024 64.7281 14.2712 64.4534 13.8842C64.2073 13.5375 64.0708 13.1336 64.0456 12.6723C64.0432 12.6286 64.0573 12.5897 64.0875 12.558C64.1177 12.5259 64.1556 12.5096 64.1997 12.5096H79.2671C79.4368 12.5096 79.575 12.3711 79.575 12.2012C79.575 10.9533 79.5747 9.70576 79.5747 8.45809C79.5747 8.39126 79.534 8.33421 79.4709 8.31222C79.4074 8.29037 79.3406 8.31038 79.2994 8.36316L78.4872 9.40182C78.3664 9.55634 78.198 9.63836 78.0021 9.63836H68.6801C68.0697 9.63836 67.4848 9.57195 66.9254 9.43971C66.3658 9.30718 65.8723 9.1037 65.4451 8.82871C65.018 8.55372 64.6774 8.21758 64.4229 7.82056C64.1685 7.4234 64.0413 6.9499 64.0413 6.4002V3.86471C64.0413 3.25357 64.1685 2.72431 64.4229 2.27635C64.6774 1.82797 65.018 1.46145 65.4451 1.17653C65.8723 0.891326 66.3658 0.6826 66.9254 0.550072C67.4848 0.417827 68.0797 0.351562 68.7105 0.351562H79.8189C81.2838 0.351562 82.4588 0.601295 83.3438 1.10005C84.1871 1.57525 84.6288 2.3419 84.6685 3.39915C84.67 3.44257 84.6558 3.48046 84.6257 3.51196C84.5955 3.54318 84.5582 3.55921 84.5148 3.55921H69.568C69.3983 3.55921 69.2601 3.69756 69.2601 3.8674V6.09187C69.2601 6.26172 69.3983 6.4002 69.568 6.4002H79.7884C80.399 6.4002 80.9992 6.45625 81.589 6.56821C82.1791 6.68016 82.6978 6.85838 83.1453 7.10286C83.5933 7.34692 83.9594 7.66788 84.244 8.06504C84.529 8.46206 84.6716 8.91527 84.6716 9.42438V12.4791ZM102.017 15.6561C101.388 15.6561 100.862 15.605 100.446 15.5035C100.029 15.4021 99.6619 15.2791 99.3469 15.1369C99.0318 14.9944 98.7516 14.8311 98.5076 14.6479C98.2636 14.4652 98.0194 14.2916 97.7752 14.1287L92.0996 8.76798C91.9807 8.65574 91.8402 8.59998 91.6771 8.59998L90.7274 8.59955C90.6605 8.59955 90.6037 8.63999 90.5817 8.70356C90.5599 8.76671 90.5796 8.83368 90.6323 8.87497L91.685 9.69966C91.8394 9.82055 91.9213 9.98912 91.9213 10.1852C91.9213 11.9062 91.9213 13.6268 91.9213 15.3479C91.9213 15.5177 91.7829 15.6561 91.6133 15.6561H87.1327C86.9365 15.6561 86.8248 15.5014 86.8248 15.3096V0.659897C86.8248 0.489909 86.963 0.351562 87.1327 0.351562H91.6133C91.7829 0.351562 91.9213 0.489909 91.9213 0.659897V6.72698C91.9213 6.79084 91.9579 6.84532 92.0167 6.86973C92.0758 6.89371 92.1403 6.8808 92.1849 6.83525L98.5741 0.351562H103.856C103.919 0.351562 103.973 0.38732 103.998 0.445638C104.023 0.503814 104.011 0.567667 103.967 0.612931L97.4763 7.30932C97.3584 7.4312 97.3612 7.62659 97.4829 7.74493L105.343 15.3913C105.389 15.436 105.402 15.5004 105.379 15.5596C105.355 15.6192 105.3 15.6561 105.236 15.6561H102.017ZM108.112 15.4271C107.563 15.2744 107.08 15.0604 106.663 14.7854C106.246 14.5104 105.915 14.1797 105.671 13.7927C105.427 13.4058 105.305 12.968 105.305 12.4791V0.659897C105.305 0.489909 105.443 0.351562 105.613 0.351562H110.093C110.263 0.351562 110.401 0.489909 110.401 0.659897V15.3469C110.401 15.4323 110.371 15.5057 110.31 15.5658C110.25 15.6258 110.176 15.6558 110.091 15.6552C109.412 15.6508 108.809 15.6206 108.112 15.4271ZM130.597 15.5951C130.332 15.5951 130.007 15.5796 129.62 15.5491C129.233 15.5186 128.816 15.4473 128.369 15.3355C127.921 15.2233 127.474 15.0604 127.026 14.8466C126.579 14.6329 126.161 14.3424 125.775 13.9759L120.312 8.84375L118.445 7.11421C118.326 7.00439 118.188 6.95018 118.027 6.95018H117.075C117.008 6.95018 116.951 6.99091 116.929 7.05405C116.908 7.11762 116.927 7.18445 116.98 7.22588L118.031 8.04929C118.185 8.17019 118.267 8.33875 118.267 8.53485V15.2867C118.267 15.4567 118.129 15.5951 117.959 15.5951H113.479C113.309 15.5951 113.171 15.4567 113.171 15.2867V0.659897C113.171 0.489909 113.309 0.351562 113.479 0.351562H114.209C114.473 0.351562 114.809 0.366887 115.216 0.397536C115.623 0.428043 116.045 0.499274 116.482 0.61137C116.92 0.723324 117.367 0.886076 117.825 1.10005C118.283 1.31403 118.705 1.6042 119.092 1.97071L124.524 7.10286C124.873 7.45277 125.287 7.798 125.653 8.14152C125.906 8.37891 126.141 8.59189 126.357 8.78033C126.473 8.88136 126.605 8.93102 126.759 8.93173L127.724 8.93542C127.791 8.9357 127.848 8.89526 127.87 8.83183C127.891 8.76855 127.872 8.70129 127.819 8.66L126.774 7.84113C126.62 7.72038 126.538 7.55167 126.538 7.35557V0.660181C126.538 0.490335 126.676 0.351846 126.846 0.351846H131.326C131.512 0.351846 131.634 0.499274 131.634 0.683594V15.2867C131.634 15.4567 131.496 15.5951 131.326 15.5951H130.597Z" fill="white"/>
                          <path d="M52.0616 4.2088V0.659897C52.0616 0.489909 52.2 0.351562 52.3696 0.351562H54.9581C55.1277 0.351562 55.2661 0.489909 55.2661 0.659897V4.2088C55.2661 4.37865 55.1277 4.51699 54.9581 4.51699H52.3696C52.2 4.51699 52.0616 4.37865 52.0616 4.2088ZM46.3119 6.41524H49.8572C50.027 6.41524 50.1652 6.55373 50.1652 6.72358V9.31456C50.1652 9.4844 50.027 9.62289 49.8572 9.62289H46.3119C46.1421 9.62289 46.0039 9.4844 46.0039 9.31456V6.72358C46.0039 6.55373 46.1421 6.41524 46.3119 6.41524ZM57.4705 6.41524H61.0159C61.1856 6.41524 61.3238 6.55373 61.3238 6.72358V9.31456C61.3238 9.4844 61.1856 9.62289 61.0159 9.62289H57.4705C57.3007 9.62289 57.1625 9.4844 57.1625 9.31456V6.72358C57.1625 6.55373 57.3007 6.41524 57.4705 6.41524ZM52.0616 15.3784V11.8295C52.0616 11.6595 52.2 11.5211 52.3696 11.5211H54.9581C55.1277 11.5211 55.2661 11.6595 55.2661 11.8295V15.3784C55.2661 15.5482 55.1277 15.6866 54.9581 15.6866H52.3696C52.2 15.6866 52.0616 15.5482 52.0616 15.3784Z" fill="#FF8753"/>
                      </svg>
                  </a>
                  <ul className="flex justify-center space-x-3 ml-auto">
                      <li className="flex rounded-lg bg-darkGray w-[6.05rem] h-12">
                          <img src="images/payment/crypto.svg" alt="Crypto" className="w-[4.5rem] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[6.05rem] h-12">
                          <img src="images/payment/visa.svg" alt="Visa" className="w-[4.5rem] m-auto" />
                      </li>
                      <li className="flex rounded-lg bg-darkGray w-[6.05rem] h-12">
                          <img src="images/payment/mc.svg" alt="MasterCard" className="w-[4.5rem] m-auto" />
                      </li>
                  </ul>
              </div>
          </footer>
      </div>
  )
}
