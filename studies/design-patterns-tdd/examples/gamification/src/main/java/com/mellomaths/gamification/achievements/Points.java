package com.mellomaths.gamification.achievements;

public class Points extends Achievement {
	
	private int points;

	public Points(String name, int points) {
		super(name);
		this.setPoints(points);
	}
	
	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	@Override
	public void designateTo(String user, AchievementStorage storage) {
		Points currentPoints = (Points) storage.getAchievement(user, this.getName());
		if (currentPoints == null) {
			storage.addAchievement(user, this);
			return;
		}
		
		this.setPoints(points + currentPoints.getPoints());
		storage.updateAchievement(user, this);
	}

}
