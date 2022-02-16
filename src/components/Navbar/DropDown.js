import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronRightIcon} from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DropDown = (props) => {
    return (
        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button
                    className="cursor-pointer inline-flex items-center text-sm font-light text-sub hover:text-red-800 focus:outline-none ">
                    {props.name}
                    <ChevronRightIcon className={'-mr-1 ml-2 h-5 w-5 text-red-800 '} aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-left static lg:absolute z-50 left-0 mt-2 w-56 rounded-md lg:shadow-lg lg:bg-white lg:ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            props.addLinks.map((item,index) => {
                                return (
                                    <Menu.Item key={index}>
                                        {({active}) => (
                                            <a
                                                href={item.path} target="_blank"
                                                className={classNames(
                                                    active ? 'bg-red-800 transition-all duration-500 text-white' : 'text-sub',
                                                    'block px-4 py-4'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </Menu.Item>
                                );
                            })
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default DropDown;
