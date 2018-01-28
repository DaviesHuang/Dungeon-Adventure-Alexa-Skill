var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"DungeonIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dungeon" )
	},
	"CastleIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "castle" )
	},
	"GoLeftIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go left" )
	},
	"GoRightIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go right" )
	},
	"AttackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "attack" )
	},
	"EscapeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "escape" )
	},
	"UseTorchIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "use torch" )
	},
	"KeepMovingIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "keep moving" )
	},
	"InvestigateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "investigate" )
	},
	"GoDownIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go down" )
	},
	"GoingDownIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "going down" )
	},
	"SneakIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "sneak" )
	},
	"OpenTheChestIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open the chest" )
	},
	"OpenDoorIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "open door" )
	},
	"AttackHisHeadIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "attack his head" )
	},
	"AttackHisHeartIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "attack his heart" )
	},
	"TakeTheCrownIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "take the crown" )
	},
	"LeaveTheDungeonIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "leave the dungeon" )
	},
	"BreakTheCrownIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "break the crown" )
	},
}