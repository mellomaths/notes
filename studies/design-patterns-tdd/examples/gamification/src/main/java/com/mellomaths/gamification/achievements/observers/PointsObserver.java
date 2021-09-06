package com.mellomaths.gamification.achievements.observers;

import com.mellomaths.gamification.achievements.Achievement;
import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.Points;
import com.mellomaths.gamification.achievements.observers.points.PointsAccomplishmentsHandler;
import com.mellomaths.gamification.achievements.observers.points.PointsAccomplishmentsHandlerFactory;

public class PointsObserver implements AchievementObserver {
	
	private AchievementStorage storage;
	
	public PointsObserver(AchievementStorage storage) {
		this.storage = storage;
	}

	public void achievementUpdate(String user, Achievement a) {
		if (!(a instanceof Points)) {
			return;
		}
		
		Points points = (Points) a;
		PointsAccomplishmentsHandler accomplishmentsHandler = new PointsAccomplishmentsHandlerFactory().create(points);
		accomplishmentsHandler.handle(user, points, storage);
	}
}
