import React, { useState } from "react";
import {ImFeed} from 'react-icons/im'
import {BiCalendarEvent} from 'react-icons/bi'
import {RiCommunityLine} from 'react-icons/ri'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {FaPoll} from 'react-icons/fa';
import {TbBadges} from 'react-icons/tb';
import {RiAccountCircleLine} from 'react-icons/ri'
import {BiGroup} from 'react-icons/bi';
const SideNavbar = () => {
  // const [active,setActive] = useState(":bg-blue-600")
  return (
    <div className="bg-cyan-300 w-[20%] h-[50%] my-1 mx-2 text-[30px]">
      <div>SideNavBar</div>
      <div className="h-[480px]">
        <div className="my-1 text-[20px] list-none">
          <li className="my-1 hover:bg-blue-600 rounded-lg"><ImFeed className="relative top-6 left-6"/>Feeds </li>
          <li className="my-1 hover:bg-blue-600 rounded-lg"><RiAccountCircleLine className="relative top-6 left-6"></RiAccountCircleLine>Mentors</li>
          <li className="my-1 hover:bg-blue-600 rounded-lg"><BiCalendarEvent className="relative top-6 left-6"></BiCalendarEvent>Events</li>
          <li className="my-1 hover:bg-blue-600 rounded-lg"><BiGroup className="relative top-6 left-6"></BiGroup>Group Pages</li>
          <li className="my-3 hover:bg-blue-600 rounded-lg"><RiCommunityLine className="relative top-6 left-6"></RiCommunityLine>Communities</li>
          <li className="my-3 hover:bg-blue-600 rounded-lg"><AiFillQuestionCircle className="relative top-6 left-6"></AiFillQuestionCircle>Questions</li>
          <li className="my-3 hover:bg-blue-600 rounded-lg"><FaPoll className="relative top-6 left-6"></FaPoll>Polls</li>
          <li className="my-3 hover:bg-blue-600 rounded-lg"><TbBadges className="relative top-6 left-6"></TbBadges>Badges</li>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
