import React from "react";



function Footer() {
    return (
        <footer>
            <div className=" container-footer md:flex md:flex-row md:items-center md:justify-around md:h-64 md:m-0: sm:h-96 sm:flex sm:flex-col" >
            <br />
                <div className="inline-block" > 
                    <img className="logo inline-block " src="https://s.latamairlines.com/icons/design-system/logos/panamericanos2023.svg" />
                    <p>Designed and built with all the love in the world </p> <p>by the Team MyTinerary</p>
                </div>
                <br />
                <br />
                <div className="flex flex-col inline-block "> 
                    <h4 className="inline-block">Links:</h4>
                    <a>Home</a>
                    <a>Cities</a>
                    <a>Sign In</a>
                </div >
                <br />
                <div className="inline-block  ">
                    <a><svg className="w-14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32"><path d="M2 2V30H30V2H2ZM19.304 11.31H17.624C17.344 11.31 16.994 11.6601 16.994 11.8701V13.55H19.304V13.8299C19.164 15.0199 19.024 16.0701 19.024 16.0701H16.994V23H13.914V16.14H12.444V13.6201H13.914V11.492C13.914 10.918 14.054 8.72007 16.994 8.72007H19.304V11.31Z" fill="white"></path></svg></a>
                    <a><svg className="w-14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32"><path d="M2 2V30H30V2H2ZM23.294 11.5201C22.944 11.9401 22.524 12.36 22.104 12.64V13.06V13.34C21.964 17.47 18.828 22.09 13.074 22.09C11.464 22.09 9.99401 21.6701 8.66401 20.9701C8.45401 20.9001 8.314 20.83 8.17401 20.69C8.38401 20.76 8.73399 20.76 8.94399 20.76C10.274 20.76 11.604 20.3401 12.654 19.5701L12.864 19.36L12.612 19.346C12.024 19.29 11.534 19.0379 11.044 18.7299C10.484 18.3099 10.064 17.7501 9.85398 17.1201C10.008 17.1761 10.134 17.19 10.274 17.19H10.568C10.708 17.19 10.82 17.1761 10.988 17.1201C11.058 17.1201 11.198 17.05 11.268 17.05C10.778 16.98 10.358 16.77 10.008 16.49C9.238 15.93 8.67798 15.0201 8.67798 13.9701V13.9L9.15398 14.096C9.39198 14.194 9.61601 14.264 9.88201 14.292L10.148 14.3061L9.966 14.1661C9.238 13.5921 8.74801 12.682 8.74801 11.646C8.74801 11.086 8.88799 10.526 9.16799 10.036C9.23799 10.106 9.30801 10.2461 9.44801 10.3161C9.86801 10.8061 10.288 11.226 10.778 11.576C12.178 12.626 13.858 13.256 15.748 13.396C15.678 13.186 15.678 12.906 15.678 12.696C15.678 10.946 17.078 9.54602 18.828 9.54602C19.668 9.54602 20.368 9.82609 20.928 10.3161L21.012 10.386C21.082 10.428 21.152 10.484 21.208 10.526C21.908 10.386 22.608 10.1061 23.168 9.75605C23.098 9.96605 23.028 10.106 22.958 10.246C22.678 10.806 22.258 11.1561 21.768 11.5061L22.86 11.226C22.944 11.198 23.014 11.17 23.098 11.142L23.588 10.946C23.574 11.24 23.434 11.3801 23.294 11.5201Z" fill="white"></path></svg></a>
                    <a><svg className="w-14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 30V2H30V30H2ZM25.8 17.176V16.5881L25.772 15.86C25.772 13.844 25.772 13.214 25.744 12.528L25.73 12.2619L25.716 11.926C25.674 10.932 25.506 10.2319 25.282 9.62993L25.268 9.58806C25.016 8.94406 24.68 8.39808 24.134 7.85208C23.588 7.30608 23.042 6.96999 22.398 6.71799C21.768 6.47999 21.068 6.31207 20.018 6.27007H19.99C19.108 6.22807 18.716 6.21401 16.882 6.21401H14.74C14.5075 6.21657 14.3011 6.21866 14.1155 6.22054C13.2839 6.22896 12.8687 6.23316 12.388 6.25605L12.192 6.27007L11.898 6.28408C10.904 6.32608 10.204 6.49399 9.60199 6.71799L9.55999 6.73201C8.91599 6.98401 8.37001 7.32009 7.82401 7.86609C7.27801 8.41209 6.94199 8.95808 6.68999 9.60208C6.43799 10.2321 6.27001 10.946 6.22801 11.982C6.18601 12.85 6.17199 13.2281 6.17199 14.8521V17.26C6.17464 17.4979 6.17678 17.7088 6.17871 17.8984C6.18699 18.7133 6.19128 19.1349 6.21399 19.6119L6.22801 19.808L6.242 20.1021C6.284 21.0961 6.45199 21.7961 6.67599 22.3981L6.68999 22.44C6.94199 23.084 7.27801 23.63 7.82401 24.176C8.37001 24.722 8.91599 25.058 9.55999 25.31C10.19 25.548 10.89 25.716 11.94 25.758L12.164 25.772C12.892 25.8 13.34 25.814 14.81 25.814H15.398H16.14C18.156 25.814 18.772 25.8 19.472 25.772L19.738 25.758L20.074 25.7439C21.068 25.7019 21.768 25.534 22.37 25.31L22.412 25.296C23.056 25.044 23.602 24.7079 24.148 24.1619C24.694 23.6159 25.03 23.07 25.282 22.426C25.534 21.796 25.702 21.082 25.744 20.046L25.758 19.822C25.786 19.094 25.8 18.66 25.8 17.176ZM24.1062 11.9822V11.9261V11.8702C24.0502 10.9882 23.9102 10.4843 23.7702 10.1483C23.5882 9.68627 23.3782 9.35017 23.0282 9.00017C22.6922 8.66417 22.3562 8.44014 21.9082 8.27214L21.8522 8.25813L21.8102 8.24412C21.4602 8.11812 20.9562 7.96414 20.0462 7.92214L19.6262 7.90813C18.9542 7.88013 18.4642 7.86626 16.8962 7.86626H15.4822C13.5642 7.86626 13.0742 7.88013 12.3182 7.90813L11.9682 7.92214C11.0022 7.96414 10.4702 8.13213 10.1202 8.25813C9.65822 8.44013 9.32221 8.65017 8.97221 9.00017C8.63621 9.33617 8.4122 9.67224 8.2442 10.1202L8.23021 10.1761L8.2022 10.2322C8.0762 10.5822 7.9362 11.0862 7.8942 11.9682L7.88021 12.3742L7.86622 12.5702L7.8522 12.8362C7.8382 13.3682 7.82422 13.9561 7.82422 15.2581V16.5602V17.2742C7.82422 18.8422 7.83821 19.2062 7.88021 20.0742V20.1301V20.1862C7.93621 21.0682 8.07622 21.5581 8.21622 21.9081C8.39822 22.3701 8.60822 22.7062 8.95822 23.0562C9.29422 23.3922 9.63022 23.6163 10.0782 23.7843L10.1342 23.7983L10.1902 23.8261C10.5402 23.9521 11.0582 24.0923 11.9542 24.1343L12.3322 24.1483C13.0462 24.1763 13.5362 24.1901 15.2722 24.1901H16.5042H17.2182C18.7862 24.1901 19.1502 24.1763 20.0182 24.1343H20.0742H20.1302C21.0262 24.0783 21.5162 23.9243 21.8522 23.7983C22.3142 23.6163 22.6502 23.4062 23.0002 23.0562C23.3362 22.7202 23.5602 22.3842 23.7282 21.9362L23.7422 21.8801L23.7702 21.8242C23.8962 21.4742 24.0362 20.9562 24.0782 20.0602L24.0922 19.6822C24.1202 18.9682 24.1342 18.4782 24.1342 16.7422V15.5102V14.7962C24.1622 13.2002 24.1482 12.8362 24.1062 11.9822ZM16.0002 20.9002C13.2982 20.9002 11.1002 18.7022 11.1002 16.0002C11.1002 13.2982 13.2982 11.1002 16.0002 11.1002C18.7022 11.1002 20.9002 13.2982 20.9002 16.0002C20.9002 18.7022 18.7022 20.9002 16.0002 20.9002ZM21.3062 12.3322C20.6342 12.3322 20.0742 11.7862 20.0742 11.1002C20.0742 10.4142 20.6202 9.86816 21.3062 9.86816C21.9782 9.86816 22.5382 10.4142 22.5382 11.1002C22.5382 11.7862 21.9782 12.3322 21.3062 12.3322ZM15.9999 19.2618C17.8014 19.2618 19.2619 17.8014 19.2619 15.9998C19.2619 14.1983 17.8014 12.7379 15.9999 12.7379C14.1983 12.7379 12.7379 14.1983 12.7379 15.9998C12.7379 17.8014 14.1983 19.2618 15.9999 19.2618Z" fill="white"></path></svg></a>
                    <a> <svg className="w-14 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 30V2H30V30H2ZM24.3416 18.8945C24.4075 17.8435 24.47 16.848 24.47 15.79C24.54 14.74 24.47 13.6201 24.4 12.5701C24.4 12.0101 24.19 11.4499 23.84 11.0299C23.42 10.4699 22.72 10.1201 21.95 10.1201L21.9393 10.1197C20.0529 10.0498 18.1663 9.97993 16.21 9.97993H15.65C13.6937 9.97993 11.8071 10.0498 9.9207 10.1197L9.91003 10.1201C8.51003 10.1201 7.38997 11.2401 7.38997 12.5701C7.24997 13.6201 7.18002 14.74 7.18002 15.79C7.18002 16.848 7.24245 17.8435 7.30837 18.8945C7.31223 18.9561 7.31611 19.0179 7.31998 19.0799C7.31998 19.9199 7.74 20.62 8.3 21.04C8.72 21.39 9.20998 21.5299 9.76998 21.5299C11.73 21.5999 13.76 21.6701 15.79 21.6701C17.82 21.6701 19.92 21.5999 21.81 21.5299C23.21 21.5299 24.33 20.4099 24.33 19.0799C24.3339 19.0179 24.3378 18.9561 24.3416 18.8945ZM13.6899 12.5702L18.4499 15.3001C18.6599 15.3701 18.7299 15.5101 18.7999 15.6501C18.9399 15.9301 18.7999 16.1401 18.5199 16.3501L13.7599 19.08C13.4799 19.22 13.2699 19.2201 13.1299 19.1501C12.9199 19.0801 12.7799 18.8702 12.7799 18.5202V13.0601C12.7799 12.5001 13.1999 12.2902 13.6899 12.5702Z" fill="white"></path></svg></a>
                    <p>Contact us on our Social Networks Team</p>
                </div>

            </div>

        </footer>
    )
}
export default Footer;