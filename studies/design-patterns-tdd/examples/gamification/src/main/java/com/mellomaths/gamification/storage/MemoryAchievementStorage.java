package com.mellomaths.gamification.storage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mellomaths.gamification.achievements.Achievement;
import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.observers.AchievementObserver;

public class MemoryAchievementStorage implements AchievementStorage {
	
	private Map<String, List<Achievement>> achievementsRepository = new HashMap<String, List<Achievement>>();
	private List<AchievementObserver> observers = new ArrayList<AchievementObserver>();

	public void addAchievement(String user, Achievement a) {
		List<Achievement> achievements = getAchievements(user);
		achievements.add(a);
		achievementsRepository.put(user, achievements);
		
		notifySubscribers(user, a);
	}
	
	public void updateAchievement(String user, Achievement achievementUpdated) {
		List<Achievement> achievements = getAchievements(user);
		Achievement existingAchievement = getAchievement(user, achievementUpdated.getName());
		achievements.remove(existingAchievement);
		addAchievement(user, achievementUpdated);
	}

	public List<Achievement> getAchievements(String user) {
		List<Achievement> achievements = achievementsRepository.get(user);
		if (achievements == null || achievements.size() == 0) {
			achievements = new ArrayList<Achievement>();
		}
		
		return achievements;
	}

	public Achievement getAchievement(String user, String achievementName) {
		List<Achievement> achievements = getAchievements(user);
		Achievement achievement = null;
		
		for (Achievement a : achievements) {
			if (a.getName().equals(achievementName)) {
				achievement = a;
			}
		}
		
		return achievement;
	}

	public void subscribe(AchievementObserver observer) {
		observers.add(observer);
	}
	
	private void notifySubscribers(String user, Achievement a) {
		for (AchievementObserver o : observers) {
			o.achievementUpdate(user, a);
		}
	}

}
