import React, { useContext, useEffect, useState } from "react";
import { useLeaderboard } from "../../hooks";
import { AuthContext } from "../../context/";
import Logo from "../../assets/logo.png";

export const Leaderboard = () => {
  const [loading, setLoading] = useState(true);
  const { myprofile } = useContext(AuthContext);
  const leaderboard = useLeaderboard();

  useEffect(() => {
    if (leaderboard.length > 0) {
      setLoading(false);
    }
  }, [leaderboard]);
  return (
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-md min-w-[400px] overflow-hidden mx-auto mt-16">
      <div class="bg-gray-100 dark:bg-gray-700  py-2 px-4">
        <h2 class="text-xl font-semibold dark:text-white text-gray-800">
          Top Performers
        </h2>
      </div>
      <ul class="divide-y dark:divide-gray-600 divide-gray-200">
        {loading
          ? [1, 2, 3, 4, 5].map((item, index) => (
              <li
                key={index}
                className="flex items-center py-4 px-6 animate-pulse"
              >
                <span className="dark:text-white text-gray-700 text-lg font-medium mr-4">
                  {item}.
                </span>
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium dark:text-white text-gray-800 bg-gray-300 h-6 w-4/5 mb-2"></h3>
                  <p className="dark:text-white text-gray-600 text-base bg-gray-300 h-4 w-1/2"></p>
                </div>
              </li>
            ))
          : leaderboard.map(
              (lead, index) =>
                (index < 5 || (myprofile && lead.id === myprofile.id)) && (
                  <li key={index} class="flex items-center py-4 px-6">
                    <span class="dark:text-white text-gray-700 text-lg font-medium mr-4">
                      {index + 1}.
                    </span>
                    <img
                      class="w-12 h-12 rounded-full object-cover mr-4"
                      src={lead.profile_pic ? lead.profile_pic : Logo}
                      alt="User avatar"
                    />
                    <div class="flex-1">
                      <h3 class="text-lg font-medium dark:text-white text-gray-800">
                        {lead.user.first_name} {lead.user.last_name}
                      </h3>
                      <p class="dark:text-white text-sm text-gray-600">
                        @{lead.user.username}
                      </p>
                    </div>
                    <span class="dark:text-white text-gray-700 text-lg font-medium mr-4">
                      {lead.total_upvotes - lead.total_downvotes} points
                    </span>
                  </li>
                )
            )}
      </ul>
    </div>
  );
};
