package com.mellomaths.gamification.achievements.observers;

import com.mellomaths.gamification.achievements.Achievement;

public interface AchievementObserver {

	void achievementUpdate(String user, Achievement a);
	
}
