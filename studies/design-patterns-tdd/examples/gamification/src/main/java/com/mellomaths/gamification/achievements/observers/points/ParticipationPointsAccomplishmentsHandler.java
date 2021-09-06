package com.mellomaths.gamification.achievements.observers.points;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.Badge;
import com.mellomaths.gamification.achievements.Points;

public class ParticipationPointsAccomplishmentsHandler implements PointsAccomplishmentsHandler {

	public void handle(String user, Points points, AchievementStorage storage) {
		Badge inventorBadge = new Badge("PART OF THE COMMUNITY");
		inventorBadge.designateTo(user, storage);
	}

}
