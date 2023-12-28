import React from "react"
import Container from "../Container"
import Flex from "../Flex"
import Paragraph from "../Paragraph"
import Head from "../Head"
import List from "../List"

const Contact = () => {
  return (
    <section className="pt-28 pb-40">
      <Container className="max-w-container">
         <Flex className="justify-between">
            <div className="w-[450px]">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="135" height="73" viewBox="0 0 135 73" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25975 36.0099C5.05709 36.0099 6.5195 37.4712 6.5195 39.2692C6.5195 41.0721 5.05709 42.5334 3.25975 42.5334C1.45909 42.5334 0 41.0721 0 39.2692C0 37.4712 1.45909 36.0099 3.25975 36.0099ZM8.07642 47.2092C11.3627 47.2092 14.0305 49.8764 14.0305 53.1622C14.0305 56.4497 11.3627 59.1152 8.07642 59.1152C4.79014 59.1152 2.12729 56.4497 2.12729 53.1622C2.12729 49.8781 4.79014 47.2092 8.07642 47.2092ZM21.1171 58.8366C24.4034 58.8366 27.0662 61.5021 27.0662 64.7929C27.0662 68.0787 24.4034 70.7459 21.1171 70.7459C17.8308 70.7459 15.163 68.0787 15.163 64.7929C15.163 61.5021 17.8308 58.8366 21.1171 58.8366ZM39.6725 64.209C42.0982 64.209 44.0663 66.1779 44.0663 68.6045C44.0663 71.0312 42.0982 73 39.6725 73C37.2467 73 35.2786 71.0312 35.2786 68.6045C35.2786 66.1795 37.2467 64.209 39.6725 64.209ZM57.112 51.4621C60.3982 51.4621 63.0661 54.1309 63.0661 57.4184C63.0661 60.7059 60.3999 63.3714 57.112 63.3714C53.829 63.3714 51.1628 60.7059 51.1628 57.4184C51.1628 54.1309 53.829 51.4621 57.112 51.4621ZM49.1665 2.19111C51.9919 2.19111 54.2767 4.47843 54.2767 7.30149C54.2767 10.1229 51.9919 12.4119 49.1665 12.4119C46.3495 12.4119 44.0613 10.1246 44.0613 7.30149C44.0613 4.47843 46.3511 2.19111 49.1665 2.19111ZM30.0457 0C32.3123 0 34.1544 1.84113 34.1544 4.1102C34.1544 6.38093 32.314 8.22372 30.0457 8.22372C27.7792 8.22372 25.9371 6.37927 25.9371 4.1102C25.9371 1.84113 27.7775 0 30.0457 0ZM13.3225 9.07296C15.1232 9.07296 16.5823 10.5343 16.5823 12.3323C16.5823 14.1352 15.1232 15.5965 13.3225 15.5965C11.5202 15.5965 10.0628 14.1352 10.0628 12.3323C10.0628 10.5343 11.5202 9.07296 13.3225 9.07296ZM61.927 13.5182C65.3807 13.5182 68.1845 16.3214 68.1845 19.7781C68.1845 23.2347 65.3807 26.0396 61.927 26.0396C58.4682 26.0396 55.6661 23.2347 55.6661 19.7781C55.6661 16.3214 58.4682 13.5182 61.927 13.5182ZM4.10868 23.6759C5.51969 23.6759 6.66209 24.8188 6.66209 26.227C6.66209 27.6352 5.51969 28.7764 4.10868 28.7764C2.70264 28.7764 1.56024 27.6352 1.56024 26.227C1.56024 24.8188 2.70264 23.6759 4.10868 23.6759Z" fill="#FF7628"/>
                    <path d="M124.376 37.3051C124.153 36.5404 123.705 35.9184 123.037 35.4374C122.369 34.958 121.591 34.7192 120.707 34.7192C119.749 34.7192 118.906 34.9895 118.185 35.527C117.733 35.862 117.311 36.4575 116.925 37.3051H124.376ZM127.835 40.017H116.771C116.933 40.9906 117.365 41.7669 118.058 42.3425C118.747 42.918 119.631 43.2083 120.707 43.2083C121.994 43.2083 123.101 42.7555 124.025 41.8565L126.93 43.2216C126.205 44.245 125.34 45.0046 124.328 45.4989C123.319 45.9915 122.123 46.2354 120.734 46.2354C118.58 46.2354 116.827 45.557 115.479 44.2002C114.121 42.8401 113.445 41.1383 113.445 39.0948C113.445 36.9999 114.121 35.2649 115.471 33.8799C116.824 32.4982 118.512 31.8049 120.546 31.8049C122.703 31.8049 124.461 32.4966 125.819 33.8799C127.169 35.2649 127.848 37.0911 127.848 39.3618L127.835 40.017ZM106.761 27.1025H110.193V32.1549H112.233V35.1222H110.193V45.8804H106.761V35.1222H104.995V32.1549H106.761V27.1025ZM95.8163 34.9829C94.7485 34.9829 93.8615 35.3561 93.1584 36.1108C92.4505 36.8655 92.099 37.8292 92.099 39.0035C92.099 40.1945 92.4554 41.1665 93.175 41.9328C93.8913 42.7007 94.7784 43.0822 95.8296 43.0822C96.9156 43.0822 97.811 42.7041 98.5273 41.951C99.2435 41.2013 99.6 40.2144 99.6 38.9936C99.6 37.8027 99.2435 36.8307 98.5273 36.0975C97.811 35.3528 96.9106 34.9829 95.8163 34.9829ZM99.4375 32.1549H102.87V45.8804H99.4375V44.4291C98.766 45.071 98.0879 45.5271 97.4114 45.8141C96.7349 46.0911 96.0004 46.2337 95.2095 46.2337C93.4337 46.2337 91.905 45.5437 90.6083 44.172C89.3117 42.7986 88.6668 41.0885 88.6668 39.0434C88.6668 36.9269 89.2902 35.1902 90.5437 33.8351C91.7955 32.4833 93.3209 31.8049 95.1083 31.8049C95.934 31.8049 96.7034 31.9608 97.4329 32.271C98.1542 32.5828 98.8207 33.0506 99.4359 33.6742V32.1549H99.4375ZM73.3645 32.1549H76.8663L80.3367 40.2542L83.7854 32.1549H87.2823L81.4376 45.8804H79.2092L73.3645 32.1549ZM64.8006 35.0459C63.7278 35.0459 62.8358 35.4191 62.1295 36.1622C61.4182 36.9086 61.0667 37.8591 61.0667 39.0185C61.0667 40.2144 61.4132 41.1797 62.1212 41.9195C62.8242 42.6609 63.708 43.0325 64.784 43.0325C65.8601 43.0325 66.7571 42.6593 67.4734 41.9062C68.1847 41.1565 68.5462 40.1961 68.5462 39.0185C68.5462 37.8425 68.1947 36.8871 67.4916 36.1506C66.787 35.4142 65.89 35.0459 64.8006 35.0459ZM64.7442 31.8032C66.0408 31.8032 67.2612 32.1283 68.4003 32.7736C69.5377 33.4171 70.4264 34.3012 71.0664 35.4092C71.7081 36.5188 72.0248 37.7164 72.0248 39.0019C72.0248 40.3006 71.6998 41.5115 71.0631 42.6377C70.4165 43.7656 69.5427 44.6447 68.4318 45.2816C67.3209 45.9136 66.0989 46.2337 64.7625 46.2337C62.7944 46.2337 61.1164 45.5321 59.722 44.1322C58.3342 42.7339 57.6345 41.0304 57.6345 39.0317C57.6345 36.8871 58.4254 35.1007 59.9939 33.6709C61.3734 32.4286 62.9552 31.8032 64.7442 31.8032ZM42.8048 32.1549H46.232V33.5598C47.0179 32.898 47.7209 32.4435 48.3626 32.1897C48.991 31.9309 49.641 31.8032 50.3042 31.8032C51.6704 31.8032 52.8211 32.2809 53.7745 33.2297C54.5737 34.0358 54.97 35.2301 54.97 36.8141V45.8804H51.566V39.8677C51.566 38.2256 51.4963 37.1359 51.3454 36.5968C51.2012 36.0611 50.9409 35.6514 50.5761 35.3677C50.2113 35.0857 49.7636 34.9464 49.2231 34.9464C48.5201 34.9464 47.9265 35.177 47.4258 35.648C46.925 36.1108 46.5735 36.7577 46.3845 37.5821C46.2834 38.0133 46.2303 38.9405 46.2303 40.3703V45.8804H42.8031V32.1549H42.8048ZM27.3035 32.1549H30.7357V33.5598C31.5183 32.898 32.2247 32.4435 32.863 32.1897C33.4964 31.9309 34.1464 31.8032 34.8096 31.8032C36.1725 31.8032 37.3265 32.2809 38.2766 33.2297C39.0758 34.0358 39.4721 35.2301 39.4721 36.8141V45.8804H36.0714V39.8677C36.0714 38.2256 35.9968 37.1359 35.8475 36.5968C35.7033 36.0611 35.4479 35.6514 35.0782 35.3677C34.7134 35.0857 34.2657 34.9464 33.7285 34.9464C33.0255 34.9464 32.4286 35.177 31.9262 35.648C31.4305 36.1108 31.0789 36.7577 30.885 37.5821C30.7888 38.0133 30.7357 38.9405 30.7357 40.3703V45.8804H27.3035V32.1549ZM20.207 27.3248H23.7089V45.8804H20.207V27.3248Z" fill="#413F45"/>
                    <path d="M75.9646 52.0679C76.0376 51.9767 76.1258 51.931 76.2291 51.931C76.3143 51.931 76.3903 51.9645 76.4572 52.0314C76.5241 52.0983 76.5575 52.1804 76.5575 52.2778C76.5575 52.369 76.5302 52.4451 76.4754 52.5059L74.2589 55.3073V58.063C74.2589 58.1847 74.2224 58.279 74.1494 58.3459C74.0825 58.4128 73.9943 58.4463 73.8849 58.4463C73.7754 58.4463 73.6842 58.4128 73.6112 58.3459C73.5443 58.279 73.5109 58.1847 73.5109 58.063V55.2982L71.2943 52.5059C71.2335 52.439 71.2031 52.3629 71.2031 52.2778C71.2031 52.1804 71.2366 52.0983 71.3035 52.0314C71.3764 51.9645 71.4585 51.931 71.5497 51.931C71.6531 51.931 71.7413 51.9767 71.8143 52.0679L73.894 54.7233L75.9646 52.0679Z" fill="#FF7628"/>
                    <path d="M78.4586 58.4645C78.039 58.4645 77.6681 58.3702 77.3458 58.1817C77.0295 57.9931 76.7833 57.7254 76.6069 57.3787C76.4366 57.0258 76.3515 56.6182 76.3515 56.1559C76.3515 55.6936 76.4366 55.289 76.6069 54.9423C76.7833 54.5894 77.0295 54.3187 77.3458 54.1302C77.6681 53.9416 78.039 53.8473 78.4586 53.8473C78.8782 53.8473 79.2491 53.9416 79.5714 54.1302C79.8937 54.3187 80.14 54.5894 80.3103 54.9423C80.4866 55.289 80.5748 55.6936 80.5748 56.1559C80.5748 56.6182 80.4866 57.0258 80.3103 57.3787C80.14 57.7254 79.8937 57.9931 79.5714 58.1817C79.2491 58.3702 78.8782 58.4645 78.4586 58.4645ZM78.4586 57.8532C78.8964 57.8532 79.2309 57.7102 79.462 57.4243C79.6991 57.1323 79.8177 56.7095 79.8177 56.1559C79.8177 55.6145 79.6991 55.1978 79.462 54.9058C79.2248 54.6077 78.8903 54.4587 78.4586 54.4587C78.0268 54.4587 77.6924 54.6077 77.4552 54.9058C77.2181 55.1978 77.0995 55.6145 77.0995 56.1559C77.0995 56.7034 77.215 57.1232 77.4461 57.4152C77.6833 57.7072 78.0208 57.8532 78.4586 57.8532Z" fill="#FF7628"/>
                    <path d="M85.0507 53.8655C85.1662 53.8655 85.2544 53.899 85.3152 53.9659C85.3821 54.0328 85.4155 54.121 85.4155 54.2305V58.0904C85.4155 58.1938 85.3821 58.279 85.3152 58.3459C85.2544 58.4128 85.1662 58.4463 85.0507 58.4463C84.9412 58.4463 84.853 58.4159 84.7861 58.355C84.7253 58.2881 84.6949 58.2029 84.6949 58.0995V57.6433C84.5551 57.9109 84.3574 58.1147 84.102 58.2547C83.8527 58.3946 83.5699 58.4645 83.2537 58.4645C82.7247 58.4645 82.3263 58.3185 82.0588 58.0265C81.7912 57.7284 81.6574 57.2904 81.6574 56.7125V54.2305C81.6574 54.121 81.6909 54.0328 81.7578 53.9659C81.8247 53.899 81.9159 53.8655 82.0314 53.8655C82.147 53.8655 82.2351 53.899 82.2959 53.9659C82.3628 54.0328 82.3963 54.121 82.3963 54.2305V56.6943C82.3963 57.0897 82.4753 57.3817 82.6334 57.5703C82.7916 57.7528 83.0409 57.844 83.3814 57.844C83.7706 57.844 84.0838 57.7193 84.3209 57.4699C84.5581 57.2144 84.6767 56.8798 84.6767 56.4662V54.2305C84.6767 54.121 84.7101 54.0328 84.777 53.9659C84.8439 53.899 84.9351 53.8655 85.0507 53.8655Z" fill="#FF7628"/>
                    <path d="M88.9871 53.8655C89.2425 53.8473 89.3702 53.9507 89.3702 54.1758C89.3702 54.2731 89.3428 54.3522 89.2881 54.413C89.2334 54.4678 89.1391 54.5012 89.0053 54.5134L88.7317 54.5408C88.3242 54.5773 88.0202 54.7233 87.8195 54.9788C87.6249 55.2282 87.5276 55.5232 87.5276 55.8639V58.0813C87.5276 58.2029 87.4942 58.2942 87.4273 58.355C87.3604 58.4159 87.2722 58.4463 87.1628 58.4463C87.0533 58.4463 86.9621 58.4159 86.8891 58.355C86.8222 58.2881 86.7888 58.1969 86.7888 58.0813V54.2305C86.7888 54.1149 86.8253 54.0267 86.8982 53.9659C86.9712 53.899 87.0594 53.8655 87.1628 53.8655C87.2601 53.8655 87.3421 53.899 87.409 53.9659C87.4759 54.0267 87.5094 54.1119 87.5094 54.2214V54.7324C87.6371 54.4647 87.8165 54.2609 88.0476 54.121C88.2847 53.9811 88.5553 53.899 88.8594 53.8747L88.9871 53.8655Z" fill="#FF7628"/>
                    <path d="M94.518 58.4737C94.0619 58.4737 93.6241 58.4067 93.2045 58.2729C92.791 58.133 92.4595 57.9474 92.2102 57.7163C92.119 57.6311 92.0734 57.5247 92.0734 57.3969C92.0734 57.3117 92.0977 57.2387 92.1464 57.1779C92.195 57.111 92.2528 57.0775 92.3197 57.0775C92.3987 57.0775 92.4839 57.111 92.5751 57.1779C93.1406 57.6159 93.7852 57.8349 94.5089 57.8349C95.0318 57.8349 95.4332 57.7345 95.7129 57.5338C95.9927 57.333 96.1325 57.0471 96.1325 56.676C96.1325 56.4631 96.0656 56.2928 95.9318 56.165C95.7981 56.0312 95.6217 55.9247 95.4028 55.8457C95.1839 55.7666 94.8889 55.6844 94.518 55.5993C94.0193 55.4837 93.6089 55.362 93.2866 55.2343C92.9704 55.1065 92.7119 54.924 92.5112 54.6868C92.3166 54.4495 92.2193 54.1393 92.2193 53.756C92.2193 53.391 92.3166 53.0686 92.5112 52.7888C92.7119 52.5029 92.9886 52.2839 93.3413 52.1318C93.7001 51.9736 94.1075 51.8945 94.5636 51.8945C94.9893 51.8945 95.3845 51.9614 95.7494 52.0953C96.1204 52.223 96.4305 52.4086 96.6798 52.6519C96.7771 52.7492 96.8258 52.8557 96.8258 52.9713C96.8258 53.0564 96.8014 53.1325 96.7528 53.1994C96.7041 53.2602 96.6464 53.2907 96.5795 53.2907C96.5126 53.2907 96.4244 53.2572 96.315 53.1903C96.017 52.9469 95.7403 52.7766 95.4849 52.6793C95.2295 52.5819 94.9224 52.5333 94.5636 52.5333C94.0589 52.5333 93.6666 52.6397 93.3869 52.8527C93.1072 53.0595 92.9673 53.3515 92.9673 53.7287C92.9673 54.0511 93.0889 54.2944 93.3322 54.4587C93.5815 54.6168 93.9616 54.7567 94.4724 54.8784C95.0258 55.0122 95.4606 55.1369 95.7768 55.2525C96.093 55.362 96.3545 55.5293 96.5612 55.7544C96.7741 55.9795 96.8805 56.2806 96.8805 56.6578C96.8805 57.0167 96.7802 57.333 96.5795 57.6068C96.3849 57.8805 96.1082 58.0934 95.7494 58.2455C95.3906 58.3976 94.9802 58.4737 94.518 58.4737Z" fill="#FF7628"/>
                    <path d="M99.8285 58.4645C99.4089 58.4645 99.0379 58.3702 98.7156 58.1817C98.3994 57.9931 98.1531 57.7254 97.9768 57.3787C97.8065 57.0258 97.7214 56.6182 97.7214 56.1559C97.7214 55.6936 97.8065 55.289 97.9768 54.9423C98.1531 54.5894 98.3994 54.3187 98.7156 54.1302C99.0379 53.9416 99.4089 53.8473 99.8285 53.8473C100.248 53.8473 100.619 53.9416 100.941 54.1302C101.264 54.3187 101.51 54.5894 101.68 54.9423C101.857 55.289 101.945 55.6936 101.945 56.1559C101.945 56.6182 101.857 57.0258 101.68 57.3787C101.51 57.7254 101.264 57.9931 100.941 58.1817C100.619 58.3702 100.248 58.4645 99.8285 58.4645ZM99.8285 57.8532C100.266 57.8532 100.601 57.7102 100.832 57.4243C101.069 57.1323 101.188 56.7095 101.188 56.1559C101.188 55.6145 101.069 55.1978 100.832 54.9058C100.595 54.6077 100.26 54.4587 99.8285 54.4587C99.3967 54.4587 99.0623 54.6077 98.8251 54.9058C98.5879 55.1978 98.4694 55.6145 98.4694 56.1559C98.4694 56.7034 98.5849 57.1232 98.816 57.4152C99.0531 57.7072 99.3906 57.8532 99.8285 57.8532Z" fill="#FF7628"/>
                    <path d="M103.42 58.4463C103.31 58.4463 103.219 58.4159 103.146 58.355C103.079 58.2881 103.046 58.1969 103.046 58.0813V52.2869C103.046 52.1713 103.079 52.0831 103.146 52.0223C103.219 51.9554 103.31 51.9219 103.42 51.9219C103.523 51.9219 103.608 51.9554 103.675 52.0223C103.748 52.0831 103.784 52.1713 103.784 52.2869V58.0813C103.784 58.1969 103.748 58.2881 103.675 58.355C103.608 58.4159 103.523 58.4463 103.42 58.4463Z" fill="#FF7628"/>
                    <path d="M108.541 53.8655C108.656 53.8655 108.744 53.899 108.805 53.9659C108.872 54.0328 108.905 54.121 108.905 54.2305V58.0904C108.905 58.1938 108.872 58.279 108.805 58.3459C108.744 58.4128 108.656 58.4463 108.541 58.4463C108.431 58.4463 108.343 58.4159 108.276 58.355C108.215 58.2881 108.185 58.2029 108.185 58.0995V57.6433C108.045 57.9109 107.847 58.1147 107.592 58.2547C107.343 58.3946 107.06 58.4645 106.744 58.4645C106.215 58.4645 105.816 58.3185 105.549 58.0265C105.281 57.7284 105.147 57.2904 105.147 56.7125V54.2305C105.147 54.121 105.181 54.0328 105.248 53.9659C105.315 53.899 105.406 53.8655 105.521 53.8655C105.637 53.8655 105.725 53.899 105.786 53.9659C105.853 54.0328 105.886 54.121 105.886 54.2305V56.6943C105.886 57.0897 105.965 57.3817 106.123 57.5703C106.282 57.7528 106.531 57.844 106.871 57.844C107.261 57.844 107.574 57.7193 107.811 57.4699C108.048 57.2144 108.167 56.8798 108.167 56.4662V54.2305C108.167 54.121 108.2 54.0328 108.267 53.9659C108.334 53.899 108.425 53.8655 108.541 53.8655Z" fill="#FF7628"/>
                    <path d="M112.331 57.8623C112.544 57.8805 112.65 57.9779 112.65 58.1543C112.65 58.2577 112.611 58.3368 112.532 58.3915C112.459 58.4402 112.346 58.4584 112.194 58.4463L111.948 58.428C111.461 58.3915 111.103 58.2455 110.872 57.99C110.641 57.7345 110.525 57.3482 110.525 56.8312V54.5408H109.914C109.81 54.5408 109.728 54.5164 109.668 54.4678C109.613 54.413 109.585 54.3431 109.585 54.2579C109.585 54.1667 109.613 54.0937 109.668 54.0389C109.728 53.9842 109.81 53.9568 109.914 53.9568H110.525V52.9257C110.525 52.8101 110.558 52.7219 110.625 52.661C110.692 52.5941 110.783 52.5607 110.899 52.5607C111.008 52.5607 111.097 52.5941 111.164 52.661C111.23 52.7219 111.264 52.8101 111.264 52.9257V53.9568H112.276C112.374 53.9568 112.45 53.9842 112.504 54.0389C112.565 54.0937 112.596 54.1667 112.596 54.2579C112.596 54.3431 112.565 54.413 112.504 54.4678C112.45 54.5164 112.374 54.5408 112.276 54.5408H111.264V56.8677C111.264 57.2022 111.331 57.4456 111.465 57.5977C111.604 57.7437 111.811 57.8258 112.085 57.844L112.331 57.8623Z" fill="#FF7628"/>
                    <path d="M113.753 58.4463C113.643 58.4463 113.552 58.4159 113.479 58.355C113.412 58.2881 113.379 58.1969 113.379 58.0813V54.2305C113.379 54.1149 113.412 54.0267 113.479 53.9659C113.552 53.899 113.643 53.8655 113.753 53.8655C113.862 53.8655 113.95 53.899 114.017 53.9659C114.084 54.0267 114.118 54.1149 114.118 54.2305V58.0813C114.118 58.2029 114.084 58.2942 114.017 58.355C113.95 58.4159 113.862 58.4463 113.753 58.4463ZM113.753 52.9074C113.607 52.9074 113.488 52.8648 113.397 52.7797C113.306 52.6945 113.26 52.5819 113.26 52.442C113.26 52.3082 113.306 52.1987 113.397 52.1135C113.488 52.0284 113.607 51.9858 113.753 51.9858C113.899 51.9858 114.017 52.0284 114.108 52.1135C114.2 52.1987 114.245 52.3082 114.245 52.442C114.245 52.5819 114.2 52.6945 114.108 52.7797C114.017 52.8648 113.899 52.9074 113.753 52.9074Z" fill="#FF7628"/>
                    <path d="M117.341 58.4645C116.922 58.4645 116.551 58.3702 116.228 58.1817C115.912 57.9931 115.666 57.7254 115.49 57.3787C115.319 57.0258 115.234 56.6182 115.234 56.1559C115.234 55.6936 115.319 55.289 115.49 54.9423C115.666 54.5894 115.912 54.3187 116.228 54.1302C116.551 53.9416 116.922 53.8473 117.341 53.8473C117.761 53.8473 118.132 53.9416 118.454 54.1302C118.776 54.3187 119.023 54.5894 119.193 54.9423C119.369 55.289 119.458 55.6936 119.458 56.1559C119.458 56.6182 119.369 57.0258 119.193 57.3787C119.023 57.7254 118.776 57.9931 118.454 58.1817C118.132 58.3702 117.761 58.4645 117.341 58.4645ZM117.341 57.8532C117.779 57.8532 118.114 57.7102 118.345 57.4243C118.582 57.1323 118.7 56.7095 118.7 56.1559C118.7 55.6145 118.582 55.1978 118.345 54.9058C118.107 54.6077 117.773 54.4587 117.341 54.4587C116.91 54.4587 116.575 54.6077 116.338 54.9058C116.101 55.1978 115.982 55.6145 115.982 56.1559C115.982 56.7034 116.098 57.1232 116.329 57.4152C116.566 57.7072 116.903 57.8532 117.341 57.8532Z" fill="#FF7628"/>
                    <path d="M122.793 53.8473C123.857 53.8473 124.389 54.4343 124.389 55.6084V58.0813C124.389 58.1969 124.356 58.2881 124.289 58.355C124.228 58.4159 124.14 58.4463 124.025 58.4463C123.909 58.4463 123.818 58.4159 123.751 58.355C123.684 58.2881 123.651 58.1969 123.651 58.0813V55.654C123.651 55.2404 123.569 54.9392 123.404 54.7507C123.246 54.5621 122.991 54.4678 122.638 54.4678C122.231 54.4678 121.905 54.5925 121.662 54.8419C121.419 55.0913 121.297 55.4289 121.297 55.8548V58.0813C121.297 58.1969 121.264 58.2881 121.197 58.355C121.136 58.4159 121.048 58.4463 120.932 58.4463C120.817 58.4463 120.726 58.4159 120.659 58.355C120.592 58.2881 120.558 58.1969 120.558 58.0813V54.2305C120.558 54.121 120.592 54.0328 120.659 53.9659C120.726 53.899 120.817 53.8655 120.932 53.8655C121.042 53.8655 121.127 53.899 121.188 53.9659C121.255 54.0328 121.288 54.118 121.288 54.2214V54.6868C121.434 54.413 121.638 54.2062 121.899 54.0663C122.161 53.9203 122.459 53.8473 122.793 53.8473Z" fill="#FF7628"/>
                    </svg>
                </div>
               
                <div className="mt-11">
                    <Paragraph className="text-bnrTClr font-Nunito text-lg font-normal leading-8" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." />
                </div>
                
            </div>
            <div className="w-[110px]">
                <Head className="text-[#413F45] font-Open text-2xl font-semibold leading-8 pb-12" text="Features" as="h3" />
                <ul>
                    <List href="#" text="Home" className="pb-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>
                   
                    <List href="#" text="About" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>

                    <List href="#" text="Benifit" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>

                    <List href="#" text="Pricing" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>

                    <List href="#" text="Blog" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>
                </ul>
            </div>
            <div className="w-[180px]">
            <Head className="text-[#413F45] font-Open text-2xl font-semibold leading-8 pb-12" text="Products" as="h3" />
                <ul>
                    <List href="#" text="Task Management" className="pb-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>
                   
                    <List href="#" text="Company growth" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>

                    <List href="#" text="Time tracking" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>
                </ul>
            </div>

            <div className="w-[180px]">
            <Head className="text-[#413F45] font-Open text-2xl font-semibold leading-8 pb-12" text="Support" as="h3" />
                <ul>
                    <List href="#" text="Customer service" className="pb-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>
                   
                    <List href="#" text="Accessibility" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>

                    <List href="#" text="Contact us" className="py-4 text-bnrTClr font-Nunito text-xl font-semibold leading-8"/>
                </ul>
            </div>
            
         </Flex>

         <div className="mt-[80px]">
            <Flex className="justify-between">
                <div>
                <Paragraph className="text-bnrTClr font-Nunito text-lg font-normal leading-8" text="@20201 Innovate.All rights reserved." />
                </div>

                <div>
                <Flex>
                    <List href="#" text="Privacy policy" className=" text-bnrTClr font-Nunito text-xl font-semibold leading-8 pr-[60px]"/>
                <List href="#" text="Terms & condition" className=" text-bnrTClr font-Nunito text-xl font-semibold leading-8"/> 
                </Flex>
                
                </div>
            </Flex>
         </div>
      </Container>
    </section>
  )
}

export default Contact