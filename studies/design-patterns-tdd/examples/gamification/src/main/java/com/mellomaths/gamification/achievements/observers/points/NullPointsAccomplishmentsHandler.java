package com.mellomaths.gamification.achievements.observers.points;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.Points;

public class NullPointsAccomplishmentsHandler implements PointsAccomplishmentsHandler {

	public void handle(String user, Points points, AchievementStorage storage) {
		return;
	}

}
