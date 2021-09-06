package com.mellomaths.gamification;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.AchievementStorageFactory;
import com.mellomaths.gamification.achievements.Points;
import com.mellomaths.gamification.forum.ForumService;
import com.mellomaths.gamification.forum.ForumServiceGamificationProxy;
import com.mellomaths.gamification.mocks.ForumServiceMock;
import com.mellomaths.gamification.mocks.UnavailableForumServiceMock;
import com.mellomaths.gamification.storage.MemoryAchievementStorage;

class ForumServiceGamificationTest {

	private AchievementStorageFactory achievementStorageFactory;
	private ForumService service;

	@BeforeEach
	public void setup() {
		achievementStorageFactory = new AchievementStorageFactory();
		achievementStorageFactory.setAchievementStorage(new MemoryAchievementStorage());
		service = new ForumServiceGamificationProxy(achievementStorageFactory, new ForumServiceMock());
	}

	@Test
	@DisplayName("It should add a topic and store achievements")
	void testAddTopic() {
		service.addTopic("mellomaths", "Gamification");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 2);
		assertNotNull(achievementStorage.getAchievement("mellomaths", "CREATION"));
		assertNotNull(achievementStorage.getAchievement("mellomaths", "I CAN TALK"));
		Points creationPoints = (Points) achievementStorage.getAchievement("mellomaths", "CREATION");
		assertEquals(creationPoints.getPoints(), 5);
	}
	
	@Test
	@DisplayName("It should add more than one topic and store achievements")
	void testAddMoreThanOneTopic() {
		service.addTopic("mellomaths", "Gamification");
		service.addTopic("mellomaths", "Design Patterns");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 2);
		assertNotNull(achievementStorage.getAchievement("mellomaths", "CREATION"));
		assertNotNull(achievementStorage.getAchievement("mellomaths", "I CAN TALK"));
		Points creationPoints = (Points) achievementStorage.getAchievement("mellomaths", "CREATION");
		assertEquals(creationPoints.getPoints(), 10);
	}
	
	@Test
	@DisplayName("It should add a comment and store achievements")
	void testAddComment() {
		service.addComment("Carlos", "Gamification", "Great topic!");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 2);
		assertNotNull(achievementStorage.getAchievement("Carlos", "PARTICIPATION"));
		assertNotNull(achievementStorage.getAchievement("Carlos", "LET ME ADD"));
		Points participationPoints = (Points) achievementStorage.getAchievement("Carlos", "PARTICIPATION");
		assertEquals(participationPoints.getPoints(), 3);
	}
	
	@Test
	@DisplayName("It should add more than one comment and store achievements")
	void testAddMoreThanOneComment() {
		service.addComment("Carlos", "Gamification", "Great topic!");
		service.addComment("Carlos", "Design Patterns", "Awesome!");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 2);
		assertNotNull(achievementStorage.getAchievement("Carlos", "PARTICIPATION"));
		assertNotNull(achievementStorage.getAchievement("Carlos", "LET ME ADD"));
		Points participationPoints = (Points) achievementStorage.getAchievement("Carlos", "PARTICIPATION");
		assertEquals(participationPoints.getPoints(), 6);
	}
	
	@Test
	@DisplayName("It should like a topic and store achievements")
	void testLikeTopic() {
		service.likeTopic("Carlos", "Gamification", "mellomaths");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 1);
		assertNotNull(achievementStorage.getAchievement("Carlos", "CREATION"));
		Points creationPoints = (Points) achievementStorage.getAchievement("Carlos", "CREATION");
		assertEquals(creationPoints.getPoints(), 1);
	}
	
	@Test
	@DisplayName("It should like more than one topic and store achievements")
	void testLikeMoreThanOneTopic() {
		service.likeTopic("Carlos", "Gamification", "mellomaths");
		service.likeTopic("Carlos", "Design Patterns", "mellomaths");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 1);
		assertNotNull(achievementStorage.getAchievement("Carlos", "CREATION"));
		Points creationPoints = (Points) achievementStorage.getAchievement("Carlos", "CREATION");
		assertEquals(creationPoints.getPoints(), 2);
	}
	
	@Test
	@DisplayName("It should like a comment and store achievements")
	void testLikeComment() {
		service.likeComment("mellomaths", "Gamification", "Great topic!", "Carlos");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 1);
		assertNotNull(achievementStorage.getAchievement("mellomaths", "PARTICIPATION"));
		Points participationPoints = (Points) achievementStorage.getAchievement("mellomaths", "PARTICIPATION");
		assertEquals(participationPoints.getPoints(), 1);
	}
	
	@Test
	@DisplayName("It should like more than one comment and store achievements")
	void testLikeMoreThanOneComment() {
		service.likeComment("mellomaths", "Gamification", "Great topic!", "Carlos");
		service.likeComment("mellomaths", "Design Patterns", "Awesome!", "Carlos");
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 1);
		assertNotNull(achievementStorage.getAchievement("mellomaths", "PARTICIPATION"));
		Points participationPoints = (Points) achievementStorage.getAchievement("mellomaths", "PARTICIPATION");
		assertEquals(participationPoints.getPoints(), 2);
	}
	
	@Test
	@DisplayName("It should check whole interation between two users with topics, comments, and likes.")
	void testWholeInterationBetweenTwoUsers() {
		service.addTopic("mellomaths", "Gamification");
		service.addTopic("mellomaths", "Design Patterns");
		
		service.addComment("Carlos", "Gamification", "Great topic!");
		service.likeTopic("Carlos", "Gamification", "mellomaths");
		service.addComment("Carlos", "Design Patterns", "Awesome!");
		service.likeTopic("Carlos", "Design Patterns", "mellomaths");
		
		service.likeComment("mellomaths", "Gamification", "Great topic!", "Carlos");
		service.likeComment("mellomaths", "Design Patterns", "Awesome!", "Carlos");
		service.addComment("mellomaths", "Gamification", "Thanks Carlos!");
		
		service.likeComment("Carlos", "Gamification", "Thanks Carlos!", "mellomaths");
		
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 4);
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 3);
		
		assertNotNull(achievementStorage.getAchievement("mellomaths", "CREATION"));
		assertNotNull(achievementStorage.getAchievement("mellomaths", "PARTICIPATION"));
		assertNotNull(achievementStorage.getAchievement("Carlos", "CREATION"));
		assertNotNull(achievementStorage.getAchievement("Carlos", "PARTICIPATION"));
		
		Points carlosCreationPoints = (Points) achievementStorage.getAchievement("Carlos", "CREATION");
		assertEquals(carlosCreationPoints.getPoints(), 2);
		Points carlosParticipationPoints = (Points) achievementStorage.getAchievement("Carlos", "PARTICIPATION");
		assertEquals(carlosParticipationPoints.getPoints(), 7);
		
		Points mellomathsCreationPoints = (Points) achievementStorage.getAchievement("mellomaths", "CREATION");
		assertEquals(mellomathsCreationPoints.getPoints(), 10);
		Points mellomathsParticipationPoints = (Points) achievementStorage.getAchievement("mellomaths", "PARTICIPATION");
		assertEquals(mellomathsParticipationPoints.getPoints(), 5);
		
		assertNotNull(achievementStorage.getAchievement("mellomaths", "I CAN TALK"));
		assertNotNull(achievementStorage.getAchievement("mellomaths", "LET ME ADD"));
		
		assertNull(achievementStorage.getAchievement("Carlos", "I CAN TALK"));
		assertNotNull(achievementStorage.getAchievement("Carlos", "LET ME ADD"));
	}
	
	@Test
	@DisplayName("It should not store achievements after forum service not responding")
	void testForumServiceNotResponding() {
		service = new ForumServiceGamificationProxy(achievementStorageFactory, new UnavailableForumServiceMock());
		assertThrows(RuntimeException.class, () -> service.addTopic("mellomaths", "Gamification"));
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 0);
		assertNull(achievementStorage.getAchievement("mellomaths", "CREATION"));
		assertNull(achievementStorage.getAchievement("mellomaths", "I CAN TALK"));
	}
	
	@Test
	@DisplayName("It should get 100 CREATION Points and receive INVENTOR Badge")
	void testGet100CreationPointsAndInventorBadge() {
		for (int i = 0; i < 100; i++) {
			service.likeTopic("Carlos", "Gamification", "mellomaths");
		}
		
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 2);
		assertNotNull(achievementStorage.getAchievement("Carlos", "CREATION"));
		assertNotNull(achievementStorage.getAchievement("Carlos", "INVENTOR"));
		Points creationPoints = (Points) achievementStorage.getAchievement("Carlos", "CREATION");
		assertEquals(creationPoints.getPoints(), 100);
	}
	
	@Test
	@DisplayName("It should get 99 CREATION Points and not receive INVENTOR Badge")
	void testGet99CreationPointsAndNoInventorBadge() {
		for (int i = 0; i < 99; i++) {
			service.likeTopic("Carlos", "Gamification", "mellomaths");
		}
		
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("Carlos").size(), 1);
		assertNotNull(achievementStorage.getAchievement("Carlos", "CREATION"));
		assertNull(achievementStorage.getAchievement("Carlos", "INVENTOR"));
		Points creationPoints = (Points) achievementStorage.getAchievement("Carlos", "CREATION");
		assertEquals(creationPoints.getPoints(), 99);
	}
	
	@Test
	@DisplayName("It should get 100 PARTICIPATION Points and receive PART OF THE COMMUNITY Badge")
	void testGet100ParticipationPointsAndPartOfTheCommunityBadge() {
		for (int i = 0; i < 100; i++) {
			service.likeComment("mellomaths", "Gamification", "Great topic!", "Carlos");
		}
		
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 2);
		assertNotNull(achievementStorage.getAchievement("mellomaths", "PARTICIPATION"));
		assertNotNull(achievementStorage.getAchievement("mellomaths", "PART OF THE COMMUNITY"));
		Points participationPoints = (Points) achievementStorage.getAchievement("mellomaths", "PARTICIPATION");
		assertEquals(participationPoints.getPoints(), 100);
	}
	
	@Test
	@DisplayName("It should get 99 PARTICIPATION Points and not receive PART OF THE COMMUNITY Badge")
	void testGet99ParticipationPointsAndNoPartOfTheCommunityBadge() {
		for (int i = 0; i < 99; i++) {
			service.likeComment("mellomaths", "Gamification", "Great topic!", "Carlos");
		}
		
		AchievementStorage achievementStorage = achievementStorageFactory.getAchievementStorage();
		assertEquals(achievementStorage.getAchievements("mellomaths").size(), 1);
		assertNotNull(achievementStorage.getAchievement("mellomaths", "PARTICIPATION"));
		assertNull(achievementStorage.getAchievement("mellomaths", "PART OF THE COMMUNITY"));
		Points participationPoints = (Points) achievementStorage.getAchievement("mellomaths", "PARTICIPATION");
		assertEquals(participationPoints.getPoints(), 99);
	}

}
