package com.mellomaths.gamification.forum;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.AchievementStorageFactory;
import com.mellomaths.gamification.achievements.Badge;
import com.mellomaths.gamification.achievements.Points;

public class ForumServiceGamificationProxy implements ForumService {
	
	private AchievementStorage achievementStorage;
	private ForumService service;
	
	public ForumServiceGamificationProxy(AchievementStorageFactory achievementStorageFactory, ForumService service) {
		achievementStorage = achievementStorageFactory.getAchievementStorage();
		this.service = service;
	}

	public void addTopic(String user, String topic) {
		service.addTopic(user, topic);
		Points points = new Points("CREATION", 5);
		points.designateTo(user, achievementStorage);
		Badge badge = new Badge("I CAN TALK");
		badge.designateTo(user, achievementStorage);
	}

	public void addComment(String user, String topic, String comment) {
		service.addComment(user, topic, comment);
		Points points = new Points("PARTICIPATION", 3);
		points.designateTo(user, achievementStorage);
		Badge badge = new Badge("LET ME ADD");
		badge.designateTo(user, achievementStorage);
	}

	public void likeTopic(String user, String topic, String topicUser) {
		service.likeTopic(user, topic, topicUser);
		Points points = new Points("CREATION", 1);
		points.designateTo(user, achievementStorage);
	}

	public void likeComment(String user, String topic, String comment, String commentUser) {
		service.likeComment(user, topic, comment, commentUser);
		Points points = new Points("PARTICIPATION", 1);
		points.designateTo(user, achievementStorage);
	}

}
