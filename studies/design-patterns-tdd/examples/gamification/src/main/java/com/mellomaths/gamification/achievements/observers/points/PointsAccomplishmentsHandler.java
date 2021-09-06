package com.mellomaths.gamification.achievements.observers.points;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.Points;

public interface PointsAccomplishmentsHandler {

	void handle(String user, Points points, AchievementStorage storage);
	
}
