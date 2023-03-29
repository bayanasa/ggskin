import Image from 'next/image'

export default function Onboarding() {
  return (
      <div className="w-full py-10 max-w-[62.5rem] mx-auto space-y-5">
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-01.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/error-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Activate Steam Guard Mobile Authenticator</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      It provides an extra layer of security that helps prevent unauthorized access to your account and
                      protects your items from fraud and scams
                  </p>
              </div>
              <a href="https://" className="text-base px-4 flex-none rounded-lg min-w-[10rem] h-12 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                  Learn more
              </a>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-01.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/good-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Steam Guard is active</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      It provides an extra layer of security that helps prevent unauthorized access to your account and
                      protects your items from fraud and scams
                  </p>
              </div>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-02.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/error-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Install our browser extension</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      To sell items on our platform, you need to install our browser extension to confirm the creation of trade offers with your buyers in Steam
                  </p>
              </div>
              <a href="https://" className="text-base px-4 flex-none rounded-lg min-w-[10rem] h-12 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                  <span className="mr-2">Learn more</span>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.5 5C14.9477 5 14.5 4.55228 14.5 4C14.5 3.44772 14.9477 3 15.5 3H20.5C21.0523 3 21.5 3.44772 21.5 4V9C21.5 9.55228 21.0523 10 20.5 10C19.9477 10 19.5 9.55228 19.5 9V6.41421L14.2071 11.7071C13.8166 12.0976 13.1834 12.0976 12.7929 11.7071C12.4024 11.3166 12.4024 10.6834 12.7929 10.2929L18.0858 5H15.5ZM8.66168 4H10.5002C11.0525 4 11.5002 4.44772 11.5002 5C11.5002 5.55228 11.0525 6 10.5002 6H8.7002C8.12365 6 7.75126 6.00078 7.4678 6.02393C7.19595 6.04613 7.09517 6.08383 7.04579 6.10899C6.85789 6.20474 6.705 6.35761 6.609 6.54603C6.5838 6.59549 6.54612 6.6962 6.52393 6.96783C6.50078 7.25114 6.5 7.6234 6.5 8.19995V15.8C6.5 16.3765 6.50078 16.7488 6.52393 17.0322C6.54613 17.3039 6.58381 17.4046 6.609 17.454C6.70495 17.6424 6.85778 17.7952 7.04579 17.891C7.09519 17.9161 7.19598 17.9538 7.46782 17.9761C7.75127 17.9992 8.12367 18 8.7002 18H16.3002C16.8767 18 17.2489 17.9992 17.5321 17.9761C17.8036 17.9539 17.9043 17.9162 17.9538 17.891C18.1425 17.7948 18.2956 17.6417 18.3912 17.454C18.4164 17.4047 18.454 17.3041 18.4762 17.0323C18.4993 16.7489 18.5 16.3767 18.5 15.8V14C18.5 13.4477 18.9477 13 19.5 13C20.0523 13 20.5 13.4477 20.5 14L20.5 15.8411C20.5 16.3671 20.5 16.821 20.4696 17.1949C20.4373 17.5902 20.3661 17.9835 20.1732 18.362C19.8854 18.927 19.4257 19.3856 18.8618 19.673C18.4835 19.8657 18.0904 19.9371 17.6951 19.9694C17.3205 20 16.8657 20 16.3384 20H8.66209C8.13473 20 7.67973 20 7.30496 19.9694C6.90959 19.9371 6.51623 19.8658 6.13781 19.673C5.57317 19.3853 5.11453 18.9264 4.82698 18.362C4.63418 17.9836 4.56287 17.5904 4.53057 17.195C4.49997 16.8204 4.49998 16.3656 4.5 15.8385V8.1614C4.49998 7.63426 4.49997 7.17951 4.53057 6.80495C4.56287 6.40961 4.63419 6.01642 4.82698 5.63805C5.11447 5.07382 5.57306 4.61473 6.13781 4.32698C6.51625 4.13416 6.90962 4.06286 7.30499 4.03057C7.67965 3.99997 8.1345 3.99998 8.66168 4Z" fill="#010709"/>
                  </svg>
              </a>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-02.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/good-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Browser extension installed</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      To sell items on our platform, you need to install our browser extension to confirm the creation of trade offers with your buyers in Steam
                  </p>
              </div>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-03.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/error-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Enter your API Key</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      We use the API Key only to create secure trade offers between you and your buyers on our platform, providing safe deals
                  </p>
              </div>
              <a href="https://" className="text-base px-4 flex-none rounded-lg min-w-[10rem] h-12 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                  Enter API Key
              </a>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-04.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/error-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Enter your Trade Link</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      You need to enter your Steam Trade URL so we can verify your inventory and send you trade offers to buy and sell items on our platform
                  </p>
              </div>
              <a href="https://" className="text-base px-4 flex-none rounded-lg min-w-[10rem] h-12 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                  Enter Trade Link
              </a>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-05.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/error-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Set your Steam inventory to public</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      A public inventory on Steam is necessary for using our marketplace. It allows you to list items for sale and helps us verify your purchases
                  </p>
              </div>
              <a href="https://" className="text-base px-4 flex-none rounded-lg min-w-[10rem] h-12 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                  <span className="mr-2">Set to public</span>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.5 5C14.9477 5 14.5 4.55228 14.5 4C14.5 3.44772 14.9477 3 15.5 3H20.5C21.0523 3 21.5 3.44772 21.5 4V9C21.5 9.55228 21.0523 10 20.5 10C19.9477 10 19.5 9.55228 19.5 9V6.41421L14.2071 11.7071C13.8166 12.0976 13.1834 12.0976 12.7929 11.7071C12.4024 11.3166 12.4024 10.6834 12.7929 10.2929L18.0858 5H15.5ZM8.66168 4H10.5002C11.0525 4 11.5002 4.44772 11.5002 5C11.5002 5.55228 11.0525 6 10.5002 6H8.7002C8.12365 6 7.75126 6.00078 7.4678 6.02393C7.19595 6.04613 7.09517 6.08383 7.04579 6.10899C6.85789 6.20474 6.705 6.35761 6.609 6.54603C6.5838 6.59549 6.54612 6.6962 6.52393 6.96783C6.50078 7.25114 6.5 7.6234 6.5 8.19995V15.8C6.5 16.3765 6.50078 16.7488 6.52393 17.0322C6.54613 17.3039 6.58381 17.4046 6.609 17.454C6.70495 17.6424 6.85778 17.7952 7.04579 17.891C7.09519 17.9161 7.19598 17.9538 7.46782 17.9761C7.75127 17.9992 8.12367 18 8.7002 18H16.3002C16.8767 18 17.2489 17.9992 17.5321 17.9761C17.8036 17.9539 17.9043 17.9162 17.9538 17.891C18.1425 17.7948 18.2956 17.6417 18.3912 17.454C18.4164 17.4047 18.454 17.3041 18.4762 17.0323C18.4993 16.7489 18.5 16.3767 18.5 15.8V14C18.5 13.4477 18.9477 13 19.5 13C20.0523 13 20.5 13.4477 20.5 14L20.5 15.8411C20.5 16.3671 20.5 16.821 20.4696 17.1949C20.4373 17.5902 20.3661 17.9835 20.1732 18.362C19.8854 18.927 19.4257 19.3856 18.8618 19.673C18.4835 19.8657 18.0904 19.9371 17.6951 19.9694C17.3205 20 16.8657 20 16.3384 20H8.66209C8.13473 20 7.67973 20 7.30496 19.9694C6.90959 19.9371 6.51623 19.8658 6.13781 19.673C5.57317 19.3853 5.11453 18.9264 4.82698 18.362C4.63418 17.9836 4.56287 17.5904 4.53057 17.195C4.49997 16.8204 4.49998 16.3656 4.5 15.8385V8.1614C4.49998 7.63426 4.49997 7.17951 4.53057 6.80495C4.56287 6.40961 4.63419 6.01642 4.82698 5.63805C5.11447 5.07382 5.57306 4.61473 6.13781 4.32698C6.51625 4.13416 6.90962 4.06286 7.30499 4.03057C7.67965 3.99997 8.1345 3.99998 8.66168 4Z" fill="#010709"/>
                  </svg>
              </a>
          </div>
          <div className="w-full flex items-center bg-interface-300 rounded-lg py-4 px-5 border-2 border-onboarding-100">
              <div className="flex-none w-16 h-14 relative">
                  <div className="w-14 h-14 rounded-full border-2 border-onboarding-200 bg-onboarding-200 flex relative">
                      <Image
                          src="images/onboarding/banner-icon-06.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
                  <div className="w-8 h-8 absolute bottom-0 right-0">
                      <Image
                          src="images/onboarding/good-icon.svg"
                          alt="Icon"
                          layout="fill"
                      />
                  </div>
              </div>
              <div className="flex flex-col px-4">
                  <h3 className="text-typography-100 font-bold text-base">Steam inventory is public</h3>
                  <p className="text-typography-300 text-sm mt-1">
                      A public inventory on Steam is necessary for using our marketplace. It allows you to list items for sale and helps us verify your purchases
                  </p>
              </div>
          </div>
          <div className="px-12 pt-12 pb-10 rounded-lg bg-interface-100 max-w-[55rem] relative">
              <button className="onboarding-close-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.26742 5.26742C5.62399 4.91086 6.20209 4.91086 6.55866 5.26742L12 10.7088L17.4413 5.26742C17.7979 4.91086 18.376 4.91086 18.7326 5.26742C19.0891 5.62399 19.0891 6.20209 18.7326 6.55866L13.2912 12L18.7325 17.4413C19.0891 17.7978 19.0891 18.3759 18.7325 18.7325C18.3759 19.0891 17.7978 19.0891 17.4413 18.7325L12 13.2912L6.55866 18.7326C6.20209 19.0891 5.62399 19.0891 5.26742 18.7326C4.91086 18.376 4.91086 17.7979 5.26742 17.4413L10.7088 12L5.26742 6.55866C4.91086 6.20209 4.91086 5.62399 5.26742 5.26742Z" fill="#15718E"/>
                  </svg>
              </button>
              <h3 className="text-white font-bold text-3xl">Inactive Steam Guard</h3>
              <div className="mt-10">
                  <p className="text-typography-200 font-medium text-base">
                      To buy or sell items on our platform, you need to have Steam Guard activated for at least 15 days.
                      Steam Guard provides an extra layer of security that helps prevent unauthorized access to your
                      account and protects your items from fraud and scams.
                  </p>
                  <p className="mt-6 text-typography-200 font-medium text-base">
                      To activate Steam Guard, follow these steps:
                  </p>
                  <ul className="mt-5">
                      <li className="pl-12 relative">
                          <span className="font-bold bg-onboarding-100 text-typography-200 text-base w-8 h-8 flex absolute top-0 left-0 border-2 border-onboarding-100 rounded-lg justify-center items-center">1</span>
                          <p className="font-medium text-base text-typography-100 pt-1">
                              Go to your Steam account settings
                          </p>
                      </li>
                      <li className="mt-6 pl-12 relative">
                          <span className="font-bold bg-onboarding-100 text-typography-200 text-base w-8 h-8 flex absolute top-0 left-0 border-2 border-onboarding-100 rounded-lg justify-center items-center">2</span>
                          <p className="font-medium text-base text-typography-100 pt-1">
                              Click on "Manage Steam Guard" and follow the instructions to enable it
                          </p>
                      </li>
                      <li className="mt-6 pl-12 relative">
                          <span className="font-bold bg-onboarding-100 text-typography-200 text-base w-8 h-8 flex absolute top-0 left-0 border-2 border-onboarding-100 rounded-lg justify-center items-center">3</span>
                          <p className="font-medium text-base text-typography-100 pt-1">
                              Wait for 15 days before buying or selling items on our platform
                          </p>
                      </li>
                  </ul>
                  <div className="mt-11 px-5 py-4 flex items-center bg-interface-300 rounded-lg border-2 border-onboarding-200">
                      <div className="w-8 h-8 relative">
                          <Image
                              src="images/onboarding/note-icon.svg"
                              alt="Icon"
                              layout="fill"
                          />
                      </div>
                      <p className="ml-4 text-sm text-typography-300">
                          If you've already activated Steam Guard, please check if it's been 15 days since you did so
                      </p>
                  </div>
                  <div className="mt-14 w-full flex space-x-2">
                      <button className="transition-colors flex font-bold text-typography-100 text-lg items-center justify-center basis-1/2 h-14 rounded-lg bg-interface-300 hover:bg-interface-400">Back</button>
                      <a href="https://" className="text-lg basis-1/2 px-4 flex-none rounded-lg min-w-[10rem] h-14 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                          <span className="mr-2">Set to public</span>
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.5 5C14.9477 5 14.5 4.55228 14.5 4C14.5 3.44772 14.9477 3 15.5 3H20.5C21.0523 3 21.5 3.44772 21.5 4V9C21.5 9.55228 21.0523 10 20.5 10C19.9477 10 19.5 9.55228 19.5 9V6.41421L14.2071 11.7071C13.8166 12.0976 13.1834 12.0976 12.7929 11.7071C12.4024 11.3166 12.4024 10.6834 12.7929 10.2929L18.0858 5H15.5ZM8.66168 4H10.5002C11.0525 4 11.5002 4.44772 11.5002 5C11.5002 5.55228 11.0525 6 10.5002 6H8.7002C8.12365 6 7.75126 6.00078 7.4678 6.02393C7.19595 6.04613 7.09517 6.08383 7.04579 6.10899C6.85789 6.20474 6.705 6.35761 6.609 6.54603C6.5838 6.59549 6.54612 6.6962 6.52393 6.96783C6.50078 7.25114 6.5 7.6234 6.5 8.19995V15.8C6.5 16.3765 6.50078 16.7488 6.52393 17.0322C6.54613 17.3039 6.58381 17.4046 6.609 17.454C6.70495 17.6424 6.85778 17.7952 7.04579 17.891C7.09519 17.9161 7.19598 17.9538 7.46782 17.9761C7.75127 17.9992 8.12367 18 8.7002 18H16.3002C16.8767 18 17.2489 17.9992 17.5321 17.9761C17.8036 17.9539 17.9043 17.9162 17.9538 17.891C18.1425 17.7948 18.2956 17.6417 18.3912 17.454C18.4164 17.4047 18.454 17.3041 18.4762 17.0323C18.4993 16.7489 18.5 16.3767 18.5 15.8V14C18.5 13.4477 18.9477 13 19.5 13C20.0523 13 20.5 13.4477 20.5 14L20.5 15.8411C20.5 16.3671 20.5 16.821 20.4696 17.1949C20.4373 17.5902 20.3661 17.9835 20.1732 18.362C19.8854 18.927 19.4257 19.3856 18.8618 19.673C18.4835 19.8657 18.0904 19.9371 17.6951 19.9694C17.3205 20 16.8657 20 16.3384 20H8.66209C8.13473 20 7.67973 20 7.30496 19.9694C6.90959 19.9371 6.51623 19.8658 6.13781 19.673C5.57317 19.3853 5.11453 18.9264 4.82698 18.362C4.63418 17.9836 4.56287 17.5904 4.53057 17.195C4.49997 16.8204 4.49998 16.3656 4.5 15.8385V8.1614C4.49998 7.63426 4.49997 7.17951 4.53057 6.80495C4.56287 6.40961 4.63419 6.01642 4.82698 5.63805C5.11447 5.07382 5.57306 4.61473 6.13781 4.32698C6.51625 4.13416 6.90962 4.06286 7.30499 4.03057C7.67965 3.99997 8.1345 3.99998 8.66168 4Z" fill="#010709"/>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
          <div className="px-12 pt-12 pb-10 rounded-lg bg-interface-100 max-w-[32rem] relative">
              <button className="onboarding-close-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.26742 5.26742C5.62399 4.91086 6.20209 4.91086 6.55866 5.26742L12 10.7088L17.4413 5.26742C17.7979 4.91086 18.376 4.91086 18.7326 5.26742C19.0891 5.62399 19.0891 6.20209 18.7326 6.55866L13.2912 12L18.7325 17.4413C19.0891 17.7978 19.0891 18.3759 18.7325 18.7325C18.3759 19.0891 17.7978 19.0891 17.4413 18.7325L12 13.2912L6.55866 18.7326C6.20209 19.0891 5.62399 19.0891 5.26742 18.7326C4.91086 18.376 4.91086 17.7979 5.26742 17.4413L10.7088 12L5.26742 6.55866C4.91086 6.20209 4.91086 5.62399 5.26742 5.26742Z" fill="#15718E"/>
                  </svg>
              </button>
              <h3 className="text-white font-bold text-3xl">Install Browser Extension</h3>
              <div className="mt-10">
                  <p className="text-typography-200 font-medium text-base">
                      To sell items on our platform, you need to install our browser extension to confirm the creation of trade offers with your buyers in Steam.
                  </p>
                  <a href="https://" className="mt-10 w-[19rem] p-4 flex items-center rounded-r-[3rem] rounded-l-lg border-2 border-onboarding-200 bg-interface-300 transition-colors hover:bg-interface-400">
                      <Image
                          src="images/onboarding/chrome.svg"
                          alt="Icon"
                          width={26}
                          height={24}
                      />
                      <div className="mx-4">
                          <h3 className="text-base font-medium text-typography-100">Download Extension</h3>
                          <span className="text-sm text-typography-300">Only for Google Chrome</span>
                      </div>
                      <div className="w-12 h-12 rounded-3xl bg-onboarding-300 border-2 border-onboarding-300 relative ml-auto transition-colors">
                          <Image
                              src="images/onboarding/download.svg"
                              alt="Icon"
                              layout="fill"
                          />
                      </div>
                  </a>
                  <div className="mt-14 w-full flex space-x-2">
                      <button className="w-full transition-colors flex font-bold text-typography-100 text-lg items-center justify-center h-14 rounded-lg bg-interface-300 hover:bg-interface-400">Back</button>
                  </div>
              </div>
          </div>
          <div className="px-12 pt-12 pb-10 rounded-lg bg-interface-100 max-w-[55rem] relative">
              <button className="onboarding-close-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.26742 5.26742C5.62399 4.91086 6.20209 4.91086 6.55866 5.26742L12 10.7088L17.4413 5.26742C17.7979 4.91086 18.376 4.91086 18.7326 5.26742C19.0891 5.62399 19.0891 6.20209 18.7326 6.55866L13.2912 12L18.7325 17.4413C19.0891 17.7978 19.0891 18.3759 18.7325 18.7325C18.3759 19.0891 17.7978 19.0891 17.4413 18.7325L12 13.2912L6.55866 18.7326C6.20209 19.0891 5.62399 19.0891 5.26742 18.7326C4.91086 18.376 4.91086 17.7979 5.26742 17.4413L10.7088 12L5.26742 6.55866C4.91086 6.20209 4.91086 5.62399 5.26742 5.26742Z" fill="#15718E"/>
                  </svg>
              </button>
              <h3 className="text-white font-bold text-3xl">Invalid API Key</h3>
              <div className="mt-10">
                  <p className="text-typography-200 font-medium text-base">
                      Enter the correct key in the field below to continue. Your API Key is needed to create secure trade
                      offers between you and your buyers on our platform, providing safe deals.
                  </p>
                  <div className="mt-6"></div>
                  <form className="flex w-full">
                      <input type="text" placeholder="Trade Link" className="placeholder:text-typography-300 focus:placeholder:text-transparent flex-auto h-14 rounded-lg bg-interface-200 px-6 text-base font-medium text-typography-300 transition-colors hover:bg-interface-300"/>
                      <button className="text-typography-300 transition-colors hover:text-typography-200 font-medium text-base px-4 ml-4">Get the Link</button>
                      <button className="text-typography-300 transition-colors hover:text-typography-200 font-medium text-base px-4 ml-2">Apply</button>
                  </form>
                  <div className="mt-14 w-full flex space-x-2">
                      <button className="transition-colors flex font-bold text-typography-100 text-lg items-center justify-center basis-1/2 h-14 rounded-lg bg-interface-300 hover:bg-interface-400">Back</button>
                      <a href="https://" className="text-lg basis-1/2 px-4 flex-none rounded-lg min-w-[10rem] h-14 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">Save</a>
                  </div>
              </div>
          </div>
          <div className="px-12 pt-12 pb-10 rounded-lg bg-interface-100 max-w-[32rem] relative">
              <button className="onboarding-close-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.26742 5.26742C5.62399 4.91086 6.20209 4.91086 6.55866 5.26742L12 10.7088L17.4413 5.26742C17.7979 4.91086 18.376 4.91086 18.7326 5.26742C19.0891 5.62399 19.0891 6.20209 18.7326 6.55866L13.2912 12L18.7325 17.4413C19.0891 17.7978 19.0891 18.3759 18.7325 18.7325C18.3759 19.0891 17.7978 19.0891 17.4413 18.7325L12 13.2912L6.55866 18.7326C6.20209 19.0891 5.62399 19.0891 5.26742 18.7326C4.91086 18.376 4.91086 17.7979 5.26742 17.4413L10.7088 12L5.26742 6.55866C4.91086 6.20209 4.91086 5.62399 5.26742 5.26742Z" fill="#15718E"/>
                  </svg>
              </button>
              <h3 className="text-white font-bold text-3xl">Hidden Steam inventory</h3>
              <div className="mt-10">
                  <p className="text-typography-200 font-medium text-base">
                      Your profile or inventory has been hidden. So, we can’t check the items and verify your purchases.
                  </p>
                  <p className="mt-6 text-typography-200 font-medium text-base">
                      Please go to Steam privacy settings and set your Steam inventory to public.
                  </p>
                  <div className="mt-14 w-full flex space-x-2">
                      <button className="transition-colors flex font-bold text-typography-100 text-lg items-center justify-center basis-1/2 h-14 rounded-lg bg-interface-300 hover:bg-interface-400">Back</button>
                      <a href="https://" className="text-lg basis-1/2 px-4 flex-none rounded-lg min-w-[10rem] h-14 bg-primary flex items-center justify-center font-bold text-typography-500 ml-auto hover:bg-primary-300 transition-colors">
                          <span className="mr-2">Set to public</span>
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.5 5C14.9477 5 14.5 4.55228 14.5 4C14.5 3.44772 14.9477 3 15.5 3H20.5C21.0523 3 21.5 3.44772 21.5 4V9C21.5 9.55228 21.0523 10 20.5 10C19.9477 10 19.5 9.55228 19.5 9V6.41421L14.2071 11.7071C13.8166 12.0976 13.1834 12.0976 12.7929 11.7071C12.4024 11.3166 12.4024 10.6834 12.7929 10.2929L18.0858 5H15.5ZM8.66168 4H10.5002C11.0525 4 11.5002 4.44772 11.5002 5C11.5002 5.55228 11.0525 6 10.5002 6H8.7002C8.12365 6 7.75126 6.00078 7.4678 6.02393C7.19595 6.04613 7.09517 6.08383 7.04579 6.10899C6.85789 6.20474 6.705 6.35761 6.609 6.54603C6.5838 6.59549 6.54612 6.6962 6.52393 6.96783C6.50078 7.25114 6.5 7.6234 6.5 8.19995V15.8C6.5 16.3765 6.50078 16.7488 6.52393 17.0322C6.54613 17.3039 6.58381 17.4046 6.609 17.454C6.70495 17.6424 6.85778 17.7952 7.04579 17.891C7.09519 17.9161 7.19598 17.9538 7.46782 17.9761C7.75127 17.9992 8.12367 18 8.7002 18H16.3002C16.8767 18 17.2489 17.9992 17.5321 17.9761C17.8036 17.9539 17.9043 17.9162 17.9538 17.891C18.1425 17.7948 18.2956 17.6417 18.3912 17.454C18.4164 17.4047 18.454 17.3041 18.4762 17.0323C18.4993 16.7489 18.5 16.3767 18.5 15.8V14C18.5 13.4477 18.9477 13 19.5 13C20.0523 13 20.5 13.4477 20.5 14L20.5 15.8411C20.5 16.3671 20.5 16.821 20.4696 17.1949C20.4373 17.5902 20.3661 17.9835 20.1732 18.362C19.8854 18.927 19.4257 19.3856 18.8618 19.673C18.4835 19.8657 18.0904 19.9371 17.6951 19.9694C17.3205 20 16.8657 20 16.3384 20H8.66209C8.13473 20 7.67973 20 7.30496 19.9694C6.90959 19.9371 6.51623 19.8658 6.13781 19.673C5.57317 19.3853 5.11453 18.9264 4.82698 18.362C4.63418 17.9836 4.56287 17.5904 4.53057 17.195C4.49997 16.8204 4.49998 16.3656 4.5 15.8385V8.1614C4.49998 7.63426 4.49997 7.17951 4.53057 6.80495C4.56287 6.40961 4.63419 6.01642 4.82698 5.63805C5.11447 5.07382 5.57306 4.61473 6.13781 4.32698C6.51625 4.13416 6.90962 4.06286 7.30499 4.03057C7.67965 3.99997 8.1345 3.99998 8.66168 4Z" fill="#010709"/>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}
