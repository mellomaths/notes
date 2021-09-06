package com.mellomaths.gamification.achievements.observers.points;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.Badge;
import com.mellomaths.gamification.achievements.Points;

public class CreationPointsAccomplishmentsHandler implements PointsAccomplishmentsHandler {

	public void handle(String user, Points points, AchievementStorage storage) {
		Badge inventorBadge = new Badge("INVENTOR");
		inventorBadge.designateTo(user, storage);	
	}

}
