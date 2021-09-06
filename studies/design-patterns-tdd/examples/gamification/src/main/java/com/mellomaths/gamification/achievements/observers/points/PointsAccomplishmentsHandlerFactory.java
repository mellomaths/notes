package com.mellomaths.gamification.achievements.observers.points;

import com.mellomaths.gamification.achievements.Points;

public class PointsAccomplishmentsHandlerFactory {
	
	public PointsAccomplishmentsHandler create(Points points) {
		if (points.getName().equals("CREATION") && points.getPoints() == 100) {
			return new CreationPointsAccomplishmentsHandler();
		}
		
		if (points.getName().equals("PARTICIPATION") && points.getPoints() == 100) {
			return new ParticipationPointsAccomplishmentsHandler();
		}
		
		return new NullPointsAccomplishmentsHandler();
	}

}
