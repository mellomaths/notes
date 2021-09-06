package com.mellomaths.gamification.achievements;

public class Badge extends Achievement {

	public Badge(String name) {
		super(name);
	}

	@Override
	public void designateTo(String user, AchievementStorage storage) {
		Badge currentBadge = (Badge) storage.getAchievement(user, this.getName());
		if (currentBadge == null) {
			storage.addAchievement(user, this);
			return;
		}
	}

}
