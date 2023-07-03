import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Claimed as ClaimedEvent,
  NewPendingOwner as NewPendingOwnerEvent,
  NewQuest as NewQuestEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  QuestPeriodUpdated as QuestPeriodUpdatedEvent
} from "../generated/Contract/Contract"
import {
  Claimed,
  NewPendingOwner,
  NewQuest,
  OwnershipTransferred,
  QuestPeriodUpdated,
  ClaimedRecord
} from "../generated/schema"

export function handleClaimed(event: ClaimedEvent): void {
  const entityId = Bytes.fromUTF8("Lobby_Claim_Reward_Records");
  let entity = ClaimedRecord.load(entityId);
  if (entity == null || entity == undefined) {
    entity = new ClaimedRecord(entityId)
  }
  entity.user = event.params.account
  entity.rewardToken = event.params.rewardToken
  entity.amount = event.params.amount
  entity.period = event.params.period
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewPendingOwner(event: NewPendingOwnerEvent): void {
  let entity = new NewPendingOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousPendingOwner = event.params.previousPendingOwner
  entity.newPendingOwner = event.params.newPendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewQuest(event: NewQuestEvent): void {
  let entity = new NewQuest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questID = event.params.questID
  entity.rewardToken = event.params.rewardToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestPeriodUpdated(event: QuestPeriodUpdatedEvent): void {
  let entity = new QuestPeriodUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questID = event.params.questID
  entity.period = event.params.period
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
