from dataclasses import dataclass
from typing import Optional


@dataclass
class CutMixConfig:
    """Define the parameters for CutMix augmentation"""
    lam: float = 0.1  #: probability original values will be updated


@dataclass
class MixUpConfig:
    """Define the parameters for CutMix augmentation"""
    lam: float = 0.1  #: weight used for the linear combination


@dataclass
class ConstrastiveConfig:
    """Define the parameters for Contrastive pretraining task"""
    constrastive_type: str = 'simsiam'
    projhead_style: str = 'same'  #: it is used to project embeddings
    nce_temp: float = 0.5  #: temperature used for the logits in case of standard constrastive type
    weight: float = 0.1  #: weight of the loss for this pretraining task
    dropout: float = .0  #: probability dropout in projection head


@dataclass
class DenoisingConfig:
    """Define the parameters for Denoising pretraining task"""
    weight_cross_entropy: float = 0.5  #: weight reconstruction loss for categorical features
    weight_mse: float = 0.5  #: weight reconstruction loss for continuous features
    scale_dim_internal_sepmlp: float = 5  # scale factor of the input dimension for the first linear layer
    dropout: float = .0  #: probability dropout in SepMLP


@dataclass
class AugmentationConfig:
    """Define the parameters used for the augmentations"""
    cutmix: Optional[CutMixConfig] = CutMixConfig()
    mixup: Optional[MixUpConfig] = MixUpConfig()


@dataclass
class PreTrainTaskConfig:
    """Define the parameters used for pretraining tasks"""
    contrastive: Optional[ConstrastiveConfig] = ConstrastiveConfig
    denoising: Optional[DenoisingConfig] = DenoisingConfig()


@dataclass
class PreTrainConfig:
    """Define parameters for the steps used during the pretraining"""
    aug: AugmentationConfig = AugmentationConfig()
    task: PreTrainTaskConfig = PreTrainTaskConfig()
    learning_rate: float = 0.03  #: value used to specify the learning rate for the optimizer pretraining


@dataclass
class TrainConfig:
    """Define parameters for the steps used during the training"""
    learning_rate: float = 0.03  #: value used to specify the learning rate for the optimizer pretraining
    internal_dimension_output_layer: int = 20  #: internal dimension of the MLP that compute the output
    mlpfory_dropout: float = .0  #: probability dropout in the the MLP used for prediction


@dataclass
class TransformerConfig:
    depth: int = 3  #: number of attention blocks used in the transformer
    heads: int = 1  #: number of heads used in the transformer
    dropout: float = .0  #: probability dropout in the transformer
    attention_type: str = 'col'  #: type of attention
    dim_head: int = 64
    scale_dim_internal_col: float = 4  # scale factor of the input dimension in case of attention_type col
    scale_dim_internal_row: float = 4  # scale factor of the input dimension in case of attention_type row


@dataclass
class NetworkConfig:
    """Define the neural network parameters"""
    transformer: TransformerConfig = TransformerConfig()
    num_workers: int = 0  #: number of cores to use
    embedding_size: int = 10  #: dimension of computed embeddings
    internal_dimension_embed_continuous: int = 100  #: internal dimension of the mlp used to project continuous columns
    dropout_embed_continuous: float = .0  #: dropout used to compute embedding continuous features


@dataclass
class SaintConfig:
    """Define all the parameters used in SAINT"""
    network: NetworkConfig = NetworkConfig()
    pretrain: PreTrainConfig = PreTrainConfig()
    train: TrainConfig = TrainConfig()