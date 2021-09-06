package com.mellomaths.gamification.achievements;

import java.util.List;

import com.mellomaths.gamification.achievements.observers.AchievementObserver;

public interface AchievementStorage {

	void addAchievement(String user, Achievement a);
	
	void updateAchievement(String user, Achievement achievementUpdated);
	
	List<Achievement> getAchievements(String user);

	Achievement getAchievement(String user, String achievementName);
	
	void subscribe(AchievementObserver observer);
	
}
