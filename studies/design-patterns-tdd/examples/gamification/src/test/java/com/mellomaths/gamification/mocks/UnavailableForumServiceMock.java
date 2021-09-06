package com.mellomaths.gamification.mocks;

import com.mellomaths.gamification.forum.ForumService;

public class UnavailableForumServiceMock implements ForumService {

	public void addTopic(String user, String topic) {
		throw new RuntimeException("Service Unavailable");
	}

	public void addComment(String user, String topic, String comment) {
		throw new RuntimeException("Service Unavailable");
	}

	public void likeTopic(String user, String topic, String topicUser) {
		throw new RuntimeException("Service Unavailable");
	}

	public void likeComment(String user, String topic, String comment, String commentUser) {
		throw new RuntimeException("Service Unavailable");
	}

}
