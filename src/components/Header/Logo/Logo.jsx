import React from 'react'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="header__logo">
            <Link to="/" className="logo">
                <img src={logo} alt="Caketown" className="logo__image" />
                <div className="logo__box">
                    <div className="logo__title">
                        <svg
                            width="124"
                            height="19"
                            viewBox="0 0 124 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.736 0.671999C10.128 0.671999 11.344 1.08 12.384 1.896C13.424 2.712 13.944 3.768 13.944 5.064C13.944 5.752 13.752 6.32 13.368 6.768C12.984 7.216 12.512 7.44 11.952 7.44C11.392 7.44 10.944 7.368 10.608 7.224C10.656 6.968 10.68 6.696 10.68 6.408C10.664 5.4 10.416 4.584 9.936 3.96C9.456 3.32 8.752 3 7.824 3C6.912 3 6.064 3.296 5.28 3.888C4.816 4.56 4.456 5.44 4.2 6.528C3.944 7.616 3.816 8.688 3.816 9.744C3.816 11.504 4.152 12.984 4.824 14.184C5.512 15.368 6.576 15.96 8.016 15.96C9.344 15.96 10.24 15.456 10.704 14.448C11.136 13.568 11.352 12.4 11.352 10.944C12.168 10.944 12.848 11.096 13.392 11.4C13.936 11.688 14.208 12.168 14.208 12.84C14.208 14.408 13.52 15.712 12.144 16.752C10.768 17.776 9.216 18.288 7.488 18.288C5.232 18.288 3.52 17.544 2.352 16.056C1.184 14.552 0.6 12.52 0.6 9.96C0.6 7.4 1.328 5.216 2.784 3.408C4.256 1.584 6.24 0.671999 8.736 0.671999ZM20.0713 1.152C20.7433 0.927999 21.3513 0.816 21.8953 0.816C22.7273 0.816 23.3753 1.112 23.8393 1.704C24.3033 2.28 24.6633 3.104 24.9193 4.176C24.9993 4.496 25.1593 5.2 25.3993 6.288C25.6553 7.376 25.8633 8.256 26.0233 8.928C26.5193 11.024 26.9673 12.648 27.3673 13.8C27.7833 14.952 28.4393 15.872 29.3353 16.56C29.1433 17.04 28.8233 17.424 28.3753 17.712C27.9433 18 27.4713 18.144 26.9593 18.144C25.7913 18.144 24.9353 17.264 24.3913 15.504C24.1353 14.688 23.9033 13.888 23.6953 13.104C23.1353 13.296 22.4393 13.392 21.6073 13.392C20.7913 13.392 19.7833 13.304 18.5833 13.128C18.0873 15.064 17.8393 16.52 17.8393 17.496C17.8393 17.704 17.8473 17.856 17.8633 17.952C17.6553 17.984 17.3033 18 16.8073 18C16.3113 18 15.8713 17.848 15.4873 17.544C15.1193 17.224 14.9353 16.776 14.9353 16.2C14.9353 15.4 15.7033 13.056 17.2393 9.168C18.7753 5.28 19.7193 2.608 20.0713 1.152ZM19.1353 11.112C19.7753 11.192 20.4233 11.232 21.0793 11.232C21.7513 11.232 22.4633 11.16 23.2153 11.016C23.0713 10.36 22.5833 7.848 21.7513 3.48C20.7593 6.056 19.8873 8.6 19.1353 11.112ZM38.0769 8.64C38.9089 10.336 39.9249 11.912 41.1249 13.368C42.3409 14.824 43.4769 15.712 44.5329 16.032C44.5329 16.704 44.3569 17.224 44.0049 17.592C43.6529 17.96 43.1489 18.144 42.4929 18.144C41.6289 18.144 40.6289 17.544 39.4929 16.344C38.3729 15.128 37.3889 13.768 36.5409 12.264C35.6929 10.76 35.1009 9.44 34.7649 8.304C36.3489 7.616 37.7009 6.552 38.8209 5.112C39.9409 3.656 40.5009 2.224 40.5009 0.816C41.1889 0.816 41.7809 0.935999 42.2769 1.176C42.7889 1.416 43.0449 1.8 43.0449 2.328C43.0449 3.16 42.5489 4.168 41.5569 5.352C40.5649 6.536 39.4049 7.632 38.0769 8.64ZM34.6929 17.712C34.1809 17.904 33.6369 18 33.0609 18C32.4849 18 31.9809 17.816 31.5489 17.448C31.1329 17.08 30.9249 16.576 30.9249 15.936C30.9249 15.296 31.0049 14.072 31.1649 12.264C31.3249 10.44 31.4049 8.984 31.4049 7.896C31.4049 5.096 31.2369 2.88 30.9009 1.248C31.4129 1.056 31.9569 0.959999 32.5329 0.959999C33.1089 0.959999 33.6049 1.144 34.0209 1.512C34.4529 1.88 34.6689 2.384 34.6689 3.024C34.6689 3.664 34.5889 4.896 34.4289 6.72C34.2689 8.528 34.1889 9.976 34.1889 11.064C34.1889 13.864 34.3569 16.08 34.6929 17.712ZM57.0765 14.688C57.2685 15.12 57.3645 15.608 57.3645 16.152C57.3645 16.696 57.1725 17.168 56.7885 17.568C56.4205 17.952 55.9645 18.144 55.4205 18.144C53.7245 18.144 51.0685 18.048 47.4525 17.856C47.1645 17.84 46.9085 17.752 46.6845 17.592C46.4605 17.416 46.3485 17.2 46.3485 16.944C46.3485 16.096 46.4125 14.664 46.5405 12.648C46.6845 10.632 46.7565 8.752 46.7565 7.008C46.7565 5.248 46.5885 3.232 46.2525 0.959999C47.4365 1.056 49.0285 1.104 51.0285 1.104C53.0285 1.104 54.9405 0.959999 56.7645 0.671999C56.9565 1.024 57.0525 1.448 57.0525 1.944C57.0525 2.424 56.8605 2.856 56.4765 3.24C56.1085 3.608 55.6445 3.792 55.0845 3.792C54.5405 3.792 53.6605 3.712 52.4445 3.552C51.2445 3.392 50.3565 3.312 49.7805 3.312C49.6525 4.928 49.5805 6.448 49.5645 7.872C50.5725 7.968 51.6525 8.016 52.8045 8.016C53.9725 8.016 54.9725 7.848 55.8045 7.512C55.9965 7.864 56.0925 8.288 56.0925 8.784C56.0925 9.264 55.9005 9.704 55.5165 10.104C55.1485 10.488 54.7005 10.68 54.1725 10.68C53.6605 10.68 52.8925 10.584 51.8685 10.392C50.8445 10.184 50.0685 10.08 49.5405 10.08C49.5405 12.608 49.5965 14.464 49.7085 15.648C50.4765 15.712 51.0765 15.744 51.5085 15.744C53.6205 15.744 55.4765 15.392 57.0765 14.688ZM60.1421 0.887999L65.2061 0.959999C67.8301 0.959999 69.7501 0.863999 70.9661 0.671999C71.1421 1.008 71.2301 1.392 71.2301 1.824C71.2301 2.256 71.0381 2.648 70.6541 3C70.2701 3.336 69.8061 3.504 69.2621 3.504L66.5021 3.192C66.5021 3.304 66.4621 3.8 66.3821 4.68C66.1581 6.84 66.0461 9.008 66.0461 11.184C66.0461 13.36 66.2141 15.536 66.5501 17.712C66.0221 17.904 65.4701 18 64.8941 18C64.3181 18 63.8221 17.84 63.4061 17.52C62.9901 17.184 62.7821 16.688 62.7821 16.032C62.7821 15.36 62.8621 14.184 63.0221 12.504C63.1821 10.824 63.2621 9.192 63.2621 7.608C63.2621 6.008 63.1821 4.52 63.0221 3.144C61.0861 3.24 59.5741 3.512 58.4861 3.96C58.2941 3.592 58.1981 3.184 58.1981 2.736C58.1981 2.272 58.3821 1.848 58.7501 1.464C59.1181 1.08 59.5821 0.887999 60.1421 0.887999ZM83.3138 9.264C83.3138 7.36 82.9218 5.824 82.1378 4.656C81.3698 3.472 80.1618 2.88 78.5138 2.88C77.5218 2.88 76.6418 3.2 75.8738 3.84C75.4418 4.512 75.0978 5.416 74.8418 6.552C74.6018 7.688 74.4818 8.768 74.4818 9.792C74.4818 11.68 74.8658 13.192 75.6338 14.328C76.4018 15.464 77.6178 16.032 79.2818 16.032C80.1938 16.032 80.9698 15.664 81.6098 14.928C82.7458 13.6 83.3138 11.712 83.3138 9.264ZM78.4658 18.288C76.1298 18.288 74.3538 17.52 73.1378 15.984C71.9218 14.432 71.3138 12.408 71.3138 9.912C71.3138 7.4 72.0658 5.232 73.5698 3.408C75.0738 1.584 76.9858 0.671999 79.3058 0.671999C81.6418 0.671999 83.4178 1.456 84.6338 3.024C85.8658 4.592 86.4818 6.632 86.4818 9.144C86.4818 11.656 85.7298 13.808 84.2258 15.6C82.7218 17.392 80.8018 18.288 78.4658 18.288ZM103.915 18C103.419 18.192 102.883 18.288 102.307 18.288C101.731 18.288 101.283 18.184 100.963 17.976C100.643 17.768 100.379 17.456 100.171 17.04C99.8669 16.432 99.5229 15.4 99.1389 13.944C98.7549 12.472 98.4509 10.864 98.2269 9.12C96.8829 13.392 96.1149 16.304 95.9229 17.856C95.2189 18.048 94.5869 18.144 94.0269 18.144C93.1149 18.144 92.4429 17.816 92.0109 17.16C91.5789 16.488 91.2669 15.616 91.0749 14.544C91.0749 14.512 90.9549 13.84 90.7149 12.528C90.4749 11.216 90.2989 10.304 90.1869 9.792C89.8189 7.92 89.4349 6.352 89.0349 5.088C88.6509 3.824 88.0829 2.96 87.3309 2.496C87.5229 2.016 87.8189 1.64 88.2189 1.368C88.6189 1.096 89.0669 0.959999 89.5629 0.959999C90.6669 0.959999 91.4589 1.792 91.9389 3.456C92.2749 4.624 92.6749 6.608 93.1389 9.408C93.6029 12.192 93.9469 14.184 94.1709 15.384C95.9789 10.328 96.8829 6.984 96.8829 5.352C96.8829 5.016 96.8429 4.784 96.7629 4.656C97.0989 4.272 97.5709 4.08 98.1789 4.08C98.8029 4.08 99.2829 4.248 99.6189 4.584C99.9709 4.92 100.251 5.464 100.459 6.216C100.667 6.952 100.955 8.4 101.323 10.56C101.707 12.72 102.003 14.328 102.211 15.384C102.851 13.368 103.355 11.744 103.723 10.512C104.107 9.28 104.499 7.728 104.899 5.856C105.315 3.984 105.523 2.472 105.523 1.32C105.523 1.112 105.515 0.96 105.499 0.863999C105.707 0.831999 106.059 0.816 106.555 0.816C107.051 0.816 107.483 0.975999 107.851 1.296C108.235 1.6 108.427 2.096 108.427 2.784C108.427 3.472 108.171 4.624 107.659 6.24C107.163 7.856 106.515 9.824 105.715 12.144C104.931 14.448 104.331 16.4 103.915 18ZM119.915 1.2C120.427 0.943999 120.963 0.816 121.523 0.816C122.099 0.816 122.563 0.992 122.915 1.344C123.283 1.696 123.467 2.12 123.467 2.616C123.467 3.112 123.395 4.208 123.251 5.904C123.107 7.584 123.035 8.92 123.035 9.912C123.035 13.096 123.179 15.744 123.467 17.856C122.955 18.048 122.379 18.144 121.739 18.144C121.115 18.144 120.627 18.04 120.275 17.832C119.251 17.24 116.859 13.496 113.099 6.6C113.035 7.224 113.003 8.688 113.003 10.992C113.003 13.28 113.179 15.52 113.531 17.712C113.035 17.904 112.499 18 111.923 18C111.347 18 110.875 17.816 110.507 17.448C110.155 17.08 109.979 16.64 109.979 16.128C109.979 15.616 110.051 14.544 110.195 12.912C110.355 11.28 110.435 10.048 110.435 9.216C110.435 6.032 110.283 3.392 109.979 1.296C110.427 1.072 111.083 0.959999 111.947 0.959999C112.811 0.959999 113.419 1.304 113.771 1.992C116.139 6.808 118.403 10.888 120.563 14.232C120.515 11.16 120.491 9.536 120.491 9.36C120.491 6.368 120.299 3.648 119.915 1.2Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div className="logo__desc">любые торты на заказ</div>
                </div>
            </Link>
        </div>
    )
}

export default Logo