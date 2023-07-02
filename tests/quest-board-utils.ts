import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovedManager,
  ChestUpdated,
  DistributorUpdated,
  EmergencyWithdraw,
  IncreasedQuestDuration,
  IncreasedQuestObjective,
  IncreasedQuestReward,
  InitDistributor,
  Killed,
  MinObjectiveUpdated,
  NewPendingOwner,
  NewQuest,
  OwnershipTransferred,
  PeriodClosed,
  PlatformFeeUpdated,
  RemovedManager,
  Unkilled,
  UpdateRewardToken,
  WhitelistToken,
  WithdrawUnusedRewards
} from "../generated/QuestBoard/QuestBoard"

export function createApprovedManagerEvent(manager: Address): ApprovedManager {
  let approvedManagerEvent = changetype<ApprovedManager>(newMockEvent())

  approvedManagerEvent.parameters = new Array()

  approvedManagerEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return approvedManagerEvent
}

export function createChestUpdatedEvent(
  oldChest: Address,
  newChest: Address
): ChestUpdated {
  let chestUpdatedEvent = changetype<ChestUpdated>(newMockEvent())

  chestUpdatedEvent.parameters = new Array()

  chestUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldChest", ethereum.Value.fromAddress(oldChest))
  )
  chestUpdatedEvent.parameters.push(
    new ethereum.EventParam("newChest", ethereum.Value.fromAddress(newChest))
  )

  return chestUpdatedEvent
}

export function createDistributorUpdatedEvent(
  oldDistributor: Address,
  newDistributor: Address
): DistributorUpdated {
  let distributorUpdatedEvent = changetype<DistributorUpdated>(newMockEvent())

  distributorUpdatedEvent.parameters = new Array()

  distributorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldDistributor",
      ethereum.Value.fromAddress(oldDistributor)
    )
  )
  distributorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDistributor",
      ethereum.Value.fromAddress(newDistributor)
    )
  )

  return distributorUpdatedEvent
}

export function createEmergencyWithdrawEvent(
  questID: BigInt,
  recipient: Address,
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createIncreasedQuestDurationEvent(
  questID: BigInt,
  addedDuration: BigInt,
  addedRewardAmount: BigInt
): IncreasedQuestDuration {
  let increasedQuestDurationEvent = changetype<IncreasedQuestDuration>(
    newMockEvent()
  )

  increasedQuestDurationEvent.parameters = new Array()

  increasedQuestDurationEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  increasedQuestDurationEvent.parameters.push(
    new ethereum.EventParam(
      "addedDuration",
      ethereum.Value.fromUnsignedBigInt(addedDuration)
    )
  )
  increasedQuestDurationEvent.parameters.push(
    new ethereum.EventParam(
      "addedRewardAmount",
      ethereum.Value.fromUnsignedBigInt(addedRewardAmount)
    )
  )

  return increasedQuestDurationEvent
}

export function createIncreasedQuestObjectiveEvent(
  questID: BigInt,
  updatePeriod: BigInt,
  newObjective: BigInt,
  addedRewardAmount: BigInt
): IncreasedQuestObjective {
  let increasedQuestObjectiveEvent = changetype<IncreasedQuestObjective>(
    newMockEvent()
  )

  increasedQuestObjectiveEvent.parameters = new Array()

  increasedQuestObjectiveEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  increasedQuestObjectiveEvent.parameters.push(
    new ethereum.EventParam(
      "updatePeriod",
      ethereum.Value.fromUnsignedBigInt(updatePeriod)
    )
  )
  increasedQuestObjectiveEvent.parameters.push(
    new ethereum.EventParam(
      "newObjective",
      ethereum.Value.fromUnsignedBigInt(newObjective)
    )
  )
  increasedQuestObjectiveEvent.parameters.push(
    new ethereum.EventParam(
      "addedRewardAmount",
      ethereum.Value.fromUnsignedBigInt(addedRewardAmount)
    )
  )

  return increasedQuestObjectiveEvent
}

export function createIncreasedQuestRewardEvent(
  questID: BigInt,
  updatePeriod: BigInt,
  newRewardPerVote: BigInt,
  addedRewardAmount: BigInt
): IncreasedQuestReward {
  let increasedQuestRewardEvent = changetype<IncreasedQuestReward>(
    newMockEvent()
  )

  increasedQuestRewardEvent.parameters = new Array()

  increasedQuestRewardEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  increasedQuestRewardEvent.parameters.push(
    new ethereum.EventParam(
      "updatePeriod",
      ethereum.Value.fromUnsignedBigInt(updatePeriod)
    )
  )
  increasedQuestRewardEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardPerVote",
      ethereum.Value.fromUnsignedBigInt(newRewardPerVote)
    )
  )
  increasedQuestRewardEvent.parameters.push(
    new ethereum.EventParam(
      "addedRewardAmount",
      ethereum.Value.fromUnsignedBigInt(addedRewardAmount)
    )
  )

  return increasedQuestRewardEvent
}

export function createInitDistributorEvent(
  distributor: Address
): InitDistributor {
  let initDistributorEvent = changetype<InitDistributor>(newMockEvent())

  initDistributorEvent.parameters = new Array()

  initDistributorEvent.parameters.push(
    new ethereum.EventParam(
      "distributor",
      ethereum.Value.fromAddress(distributor)
    )
  )

  return initDistributorEvent
}

export function createKilledEvent(killTime: BigInt): Killed {
  let killedEvent = changetype<Killed>(newMockEvent())

  killedEvent.parameters = new Array()

  killedEvent.parameters.push(
    new ethereum.EventParam(
      "killTime",
      ethereum.Value.fromUnsignedBigInt(killTime)
    )
  )

  return killedEvent
}

export function createMinObjectiveUpdatedEvent(
  oldMinObjective: BigInt,
  newMinObjective: BigInt
): MinObjectiveUpdated {
  let minObjectiveUpdatedEvent = changetype<MinObjectiveUpdated>(newMockEvent())

  minObjectiveUpdatedEvent.parameters = new Array()

  minObjectiveUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldMinObjective",
      ethereum.Value.fromUnsignedBigInt(oldMinObjective)
    )
  )
  minObjectiveUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMinObjective",
      ethereum.Value.fromUnsignedBigInt(newMinObjective)
    )
  )

  return minObjectiveUpdatedEvent
}

export function createNewPendingOwnerEvent(
  previousPendingOwner: Address,
  newPendingOwner: Address
): NewPendingOwner {
  let newPendingOwnerEvent = changetype<NewPendingOwner>(newMockEvent())

  newPendingOwnerEvent.parameters = new Array()

  newPendingOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "previousPendingOwner",
      ethereum.Value.fromAddress(previousPendingOwner)
    )
  )
  newPendingOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingOwner",
      ethereum.Value.fromAddress(newPendingOwner)
    )
  )

  return newPendingOwnerEvent
}

export function createNewQuestEvent(
  questID: BigInt,
  creator: Address,
  gauge: Address,
  rewardToken: Address,
  duration: BigInt,
  startPeriod: BigInt,
  objectiveVotes: BigInt,
  rewardPerVote: BigInt
): NewQuest {
  let newQuestEvent = changetype<NewQuest>(newMockEvent())

  newQuestEvent.parameters = new Array()

  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam("gauge", ethereum.Value.fromAddress(gauge))
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "startPeriod",
      ethereum.Value.fromUnsignedBigInt(startPeriod)
    )
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "objectiveVotes",
      ethereum.Value.fromUnsignedBigInt(objectiveVotes)
    )
  )
  newQuestEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPerVote",
      ethereum.Value.fromUnsignedBigInt(rewardPerVote)
    )
  )

  return newQuestEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPeriodClosedEvent(
  questID: BigInt,
  period: BigInt
): PeriodClosed {
  let periodClosedEvent = changetype<PeriodClosed>(newMockEvent())

  periodClosedEvent.parameters = new Array()

  periodClosedEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  periodClosedEvent.parameters.push(
    new ethereum.EventParam("period", ethereum.Value.fromUnsignedBigInt(period))
  )

  return periodClosedEvent
}

export function createPlatformFeeUpdatedEvent(
  oldfee: BigInt,
  newFee: BigInt
): PlatformFeeUpdated {
  let platformFeeUpdatedEvent = changetype<PlatformFeeUpdated>(newMockEvent())

  platformFeeUpdatedEvent.parameters = new Array()

  platformFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldfee", ethereum.Value.fromUnsignedBigInt(oldfee))
  )
  platformFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return platformFeeUpdatedEvent
}

export function createRemovedManagerEvent(manager: Address): RemovedManager {
  let removedManagerEvent = changetype<RemovedManager>(newMockEvent())

  removedManagerEvent.parameters = new Array()

  removedManagerEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return removedManagerEvent
}

export function createUnkilledEvent(unkillTime: BigInt): Unkilled {
  let unkilledEvent = changetype<Unkilled>(newMockEvent())

  unkilledEvent.parameters = new Array()

  unkilledEvent.parameters.push(
    new ethereum.EventParam(
      "unkillTime",
      ethereum.Value.fromUnsignedBigInt(unkillTime)
    )
  )

  return unkilledEvent
}

export function createUpdateRewardTokenEvent(
  token: Address,
  newMinRewardPerVote: BigInt
): UpdateRewardToken {
  let updateRewardTokenEvent = changetype<UpdateRewardToken>(newMockEvent())

  updateRewardTokenEvent.parameters = new Array()

  updateRewardTokenEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  updateRewardTokenEvent.parameters.push(
    new ethereum.EventParam(
      "newMinRewardPerVote",
      ethereum.Value.fromUnsignedBigInt(newMinRewardPerVote)
    )
  )

  return updateRewardTokenEvent
}

export function createWhitelistTokenEvent(
  token: Address,
  minRewardPerVote: BigInt
): WhitelistToken {
  let whitelistTokenEvent = changetype<WhitelistToken>(newMockEvent())

  whitelistTokenEvent.parameters = new Array()

  whitelistTokenEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  whitelistTokenEvent.parameters.push(
    new ethereum.EventParam(
      "minRewardPerVote",
      ethereum.Value.fromUnsignedBigInt(minRewardPerVote)
    )
  )

  return whitelistTokenEvent
}

export function createWithdrawUnusedRewardsEvent(
  questID: BigInt,
  recipient: Address,
  amount: BigInt
): WithdrawUnusedRewards {
  let withdrawUnusedRewardsEvent = changetype<WithdrawUnusedRewards>(
    newMockEvent()
  )

  withdrawUnusedRewardsEvent.parameters = new Array()

  withdrawUnusedRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "questID",
      ethereum.Value.fromUnsignedBigInt(questID)
    )
  )
  withdrawUnusedRewardsEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  withdrawUnusedRewardsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawUnusedRewardsEvent
}
