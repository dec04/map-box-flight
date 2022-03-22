import React from "react";
import {Tab} from "@headlessui/react";
import {MdPerson} from "react-icons/md";
import {BsDisplay} from "react-icons/bs";
import {GoSettings} from "react-icons/go";
import {IoSettingsOutline} from "react-icons/io5";
import TabContent from "./TabContent.jsx";

const Settings = () => {

    return <div className="settings">
        <Tab.Group>
            <div className="settings-left-menu">
                <h5>Settings</h5>
                <Tab.List className="tab-list">
                    <Tab className="tab">
                        <MdPerson className="mr-1"/>
                        <span>Personal</span>
                    </Tab>
                    <Tab className="tab">
                        <BsDisplay className="mr-1"/>
                        <span>Display</span>
                    </Tab>
                    <Tab className="tab">
                        <GoSettings className="mr-1"/>
                        <span>Gameplay</span>
                    </Tab>
                    <Tab className="tab">
                        <IoSettingsOutline className="mr-1"/>
                        <span>Configuration</span>
                    </Tab>
                </Tab.List>
            </div>
            <div className="settings-right-content">
                <Tab.Panels>
                    <Tab.Panel>
                        <TabContent>
                            <h4>Personal</h4>
                            <hr/>
                            <p>Configure personal information. Name, plane, etc.</p>
                        </TabContent>
                    </Tab.Panel>
                    <Tab.Panel>
                        <TabContent>
                            <h4>Display</h4>
                            <hr/>
                            <p>Change background image. Change system colors, etc.</p>
                        </TabContent>
                    </Tab.Panel>
                    <Tab.Panel>
                        <TabContent>
                            <h4>Gameplay</h4>
                            <hr/>
                            <p>Configure gameplay options.</p>
                        </TabContent>
                    </Tab.Panel>
                    <Tab.Panel>
                        <TabContent>
                            <h4>Configuration</h4>
                            <hr/>
                            <p>Configure your MSFS 2020 connection.</p>
                        </TabContent>
                    </Tab.Panel>
                </Tab.Panels>
            </div>
        </Tab.Group>


    </div>;
};

export default Settings;