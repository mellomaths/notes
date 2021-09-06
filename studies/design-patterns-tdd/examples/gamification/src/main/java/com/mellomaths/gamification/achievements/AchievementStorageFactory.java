package com.mellomaths.gamification.achievements;

import com.mellomaths.gamification.achievements.observers.PointsObserver;

public class AchievementStorageFactory {
	
	private AchievementStorage storage;
	
	public void setAchievementStorage(AchievementStorage a) {
		storage = a;
		storage.subscribe(new PointsObserver(a));
	}
	
	public AchievementStorage getAchievementStorage() {
		return storage;
	}

}
