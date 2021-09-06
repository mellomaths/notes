package com.mellomaths.gamification.achievements;

public abstract class Achievement {
	
	private final String name;
	
	public Achievement(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	abstract public void designateTo(String user, AchievementStorage storage);

}
