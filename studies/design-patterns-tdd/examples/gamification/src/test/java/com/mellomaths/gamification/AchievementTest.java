package com.mellomaths.gamification;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.mellomaths.gamification.achievements.AchievementStorage;
import com.mellomaths.gamification.achievements.AchievementStorageFactory;
import com.mellomaths.gamification.achievements.Badge;
import com.mellomaths.gamification.achievements.Points;
import com.mellomaths.gamification.storage.MemoryAchievementStorage;

public class AchievementTest {
	
	private AchievementStorage storage;
    
	@BeforeEach
	public void setup() {
		AchievementStorageFactory storageFactory = new AchievementStorageFactory();
        storageFactory.setAchievementStorage(new MemoryAchievementStorage());
        storage = storageFactory.getAchievementStorage();
	}
    
    @Test
    @DisplayName("It should designate one point to a user.")
    public void testOnePointToAUser() {
    	Points p = new Points("CREATION", 8);
    	p.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 1);
    	Points currentPoints = (Points) storage.getAchievement("mellomaths", "CREATION");
    	assertEquals(currentPoints.getPoints(), 8);
    }
    
    @Test
    @DisplayName("It should designate more than one points of the same to a user.")
    public void testTheSamePointTwiceToAUser() {
    	Points firstPoints = new Points("CREATION", 8);
    	firstPoints.designateTo("mellomaths", storage);
    	
    	Points secondPoints = new Points("CREATION", 12);
    	secondPoints.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 1);
    	Points currentPoints = (Points) storage.getAchievement("mellomaths", "CREATION");
    	assertEquals(currentPoints.getPoints(), 20);
    }
    
    @Test
    @DisplayName("It should designate two different types of points to a user.")
    public void testTwoDifferentPointsToAUser() {
    	Points firstPoints = new Points("CREATION", 8);
    	firstPoints.designateTo("mellomaths", storage);
    	
    	Points secondPoints = new Points("PARTICIPATION", 12);
    	secondPoints.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 2);
    	Points creationPoints = (Points) storage.getAchievement("mellomaths", "CREATION");
    	assertEquals(creationPoints.getPoints(), 8);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 2);
    	Points participationPoints = (Points) storage.getAchievement("mellomaths", "PARTICIPATION");
    	assertEquals(participationPoints.getPoints(), 12);
    }
    
    @Test
    @DisplayName("It should designate one badge to a user.")
    public void testOneBadgeToAUser() {
    	Badge b = new Badge("Superhero");
    	b.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 1);
    }
    
    @Test
    @DisplayName("It should designate different badges to a user.")
    public void testDifferentBadgesToAUser() {
    	Badge superheroBadge = new Badge("Superhero");
    	superheroBadge.designateTo("mellomaths", storage);
    	
    	Badge rockstarBadge = new Badge("Rockstar");
    	rockstarBadge.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 2);
    }
    
    @Test
    @DisplayName("It should not designate the same badge to a user.")
    public void testSameBadgesToAUser() {
    	Badge superheroBadge = new Badge("Superhero");
    	superheroBadge.designateTo("mellomaths", storage);
    	
    	Badge secondSuperheroBadge = new Badge("Superhero");
    	secondSuperheroBadge.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 1);
    }
    
    @Test
    @DisplayName("It should designate one point and one badge to a user.")
    public void testOnePointAndOneBadgeToAUser() {
    	Points p = new Points("CREATION", 8);
    	p.designateTo("mellomaths", storage);
    	Badge b = new Badge("Superhero");
    	b.designateTo("mellomaths", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 2);
    	Points currentPoints = (Points) storage.getAchievement("mellomaths", "CREATION");
    	assertEquals(currentPoints.getPoints(), 8);
    }
    
    @Test
    @DisplayName("It should designate one point and one badge to different users.")
    public void testOnePointAndOneBadgeToDifferentUsers() {
    	Points p = new Points("CREATION", 8);
    	p.designateTo("mellomaths", storage);
    	p.designateTo("Carlos", storage);
    	Badge b = new Badge("Superhero");
    	b.designateTo("mellomaths", storage);
    	b.designateTo("Carlos", storage);
    	
    	assertEquals(storage.getAchievements("mellomaths").size(), 2);
    	Points mellomathsPoints = (Points) storage.getAchievement("mellomaths", "CREATION");
    	assertEquals(mellomathsPoints.getPoints(), 8);
    	
    	assertEquals(storage.getAchievements("Carlos").size(), 2);
    	Points carlosPoints = (Points) storage.getAchievement("Carlos", "CREATION");
    	assertEquals(carlosPoints.getPoints(), 8);
    }
}
